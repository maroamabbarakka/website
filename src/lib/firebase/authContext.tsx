"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase/config";
import { onAuthStateChanged, User, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { AdminRole, AdminUser } from "@/lib/types";

interface AuthContextType {
  user: User | null;
  adminProfile: AdminUser | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  adminProfile: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [adminProfile, setAdminProfile] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "adminUsers", currentUser.uid));
          if (userDoc.exists()) {
            const data = userDoc.data() as AdminUser;
            if (data.active) {
              setAdminProfile(data);
            } else {
              // Akun admin dinonaktifkan
              setAdminProfile(null);
            }
          } else {
            // Fail-closed: Akun terotentikasi belum didaftarkan di adminUsers
            setAdminProfile(null);
          }
        } catch (err) {
          // Fail-closed: Jika gagal membaca Firestore, jangan beri hak akses istimewa
          console.error("Gagal memuat profil otorisasi admin:", err);
          setAdminProfile(null);
        }
      } else {
        setAdminProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, adminProfile, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
