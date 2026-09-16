"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Lead, LeadStatus } from "@/lib/types";
import { db } from "@/lib/firebase/config";
import { collection, getDocs, query, orderBy, doc, updateDoc } from "firebase/firestore";
import { Mail, Phone, Building, Calendar, Filter, Clock, Check, RefreshCw, AlertCircle, Hash } from "lucide-react";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      const items: Lead[] = [];
      snap.forEach((d) => {
        items.push({ id: d.id, ...d.data() } as Lead);
      });
      setLeads(items);
      if (items.length > 0) {
        setSelectedLead((prev) => prev ?? items[0]);
      }
    } catch (err: any) {
      console.error("Gagal memuat data leads dari Firestore:", err);
      setError("Tidak dapat memuat data prospek langsung dari Firestore: " + (err?.message || "Izin akses ditolak atau server offline"));
      setLeads([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const updateLeadStatus = async (leadId: string, newStatus: LeadStatus) => {
    if (!leadId) return;
    try {
      await updateDoc(doc(db, "leads", leadId), {
        status: newStatus,
        updatedAt: new Date().toISOString(),
      });
      setLeads((prev) =>
        prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
      );
      if (selectedLead?.id === leadId) {
        setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
    } catch (err: any) {
      console.error("Gagal memperbarui status lead:", err);
      alert("Gagal memperbarui status di Firestore: " + (err?.message || "Kesalahan otorisasi"));
    }
  };

  const filteredLeads =
    activeFilter === "all"
      ? leads
      : leads.filter((l) => (l.status || "new") === activeFilter);

  const statusColors: Record<string, string> = {
    new: "bg-blue-50 text-blue-700 border-blue-200",
    contacted: "bg-amber-50 text-amber-700 border-amber-200",
    qualified: "bg-purple-50 text-purple-700 border-purple-200",
    won: "bg-emerald-50 text-emerald-700 border-emerald-200",
    lost: "bg-gray-100 text-gray-700 border-gray-200",
    spam: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-maroa-black">Kotak Masuk Leads & Prospek</h1>
          <p className="text-xs text-maroa-gray-700 mt-1">
            Data prospek langsung tersimpan pada koleksi Cloud Firestore <code className="bg-gray-100 px-1 py-0.5 rounded text-[11px]">leads</code>.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchLeads}
          disabled={loading}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-maroa-sm bg-maroa-white border border-maroa-gray-300 text-maroa-charcoal text-xs font-semibold hover:bg-maroa-gray-100 transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin text-maroa-red" : ""}`} />
          <span>Segarkan Data</span>
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-maroa-md bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-3">
          <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold">Pemberitahuan Status Server:</span>
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-maroa-gray-200">
        {["all", "new", "contacted", "qualified", "won", "lost", "spam"].map((st) => (
          <button
            key={st}
            onClick={() => setActiveFilter(st)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors ${
              activeFilter === st
                ? "bg-maroa-black text-white"
                : "bg-maroa-white border border-maroa-gray-300 text-maroa-charcoal hover:bg-maroa-gray-100"
            }`}
          >
            {st === "all" ? `Semua (${leads.length})` : st}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Kolom Kiri: Daftar Leads (7 Kolom) */}
        <div className="lg:col-span-7 bg-maroa-white border border-maroa-gray-300 rounded-maroa-md shadow-card overflow-hidden">
          {filteredLeads.length === 0 ? (
            <div className="p-12 text-center text-xs text-maroa-gray-500 space-y-2">
              <Clock className="h-8 w-8 mx-auto text-maroa-gray-400" />
              <p>Tidak ada data prospek dalam status ini.</p>
            </div>
          ) : (
            <div className="divide-y divide-maroa-gray-100">
              {filteredLeads.map((lead, idx) => {
                const isSelected =
                  (selectedLead?.id && lead.id && selectedLead.id === lead.id) ||
                  (selectedLead?.email === lead.email && selectedLead?.createdAt === lead.createdAt);
                return (
                  <div
                    key={lead.id || idx}
                    onClick={() => setSelectedLead(lead)}
                    className={`p-4 transition-colors cursor-pointer hover:bg-maroa-gray-100/60 ${
                      isSelected ? "bg-maroa-gray-100 border-l-4 border-maroa-red" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-sm text-maroa-black">{lead.fullName}</h3>
                        <p className="text-xs text-maroa-gray-500">{lead.companyOrganization || "Independen"}</p>
                      </div>
                      <span
                        className={`text-[11px] px-2.5 py-0.5 rounded-full border font-semibold capitalize ${
                          statusColors[lead.status || "new"] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {lead.status || "new"}
                      </span>
                    </div>

                    <p className="text-xs text-maroa-gray-700 mt-2 line-clamp-2 leading-relaxed">
                      {lead.message}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-[11px] text-maroa-gray-500">
                      <span className="uppercase font-semibold text-maroa-charcoal">{lead.serviceType}</span>
                      <span>{lead.projectTimeline || "Jadwal Fleksibel"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Kolom Kanan: Rincian Lead Terpilih (5 Kolom) */}
        <div className="lg:col-span-5">
          {selectedLead ? (
            <div className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-6 shadow-card space-y-6">
              <div className="pb-4 border-b border-maroa-gray-100">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-maroa-red">
                  Rincian Prospek
                </span>
                <h2 className="text-lg font-bold text-maroa-black mt-1">{selectedLead.fullName}</h2>
                <p className="text-xs text-maroa-gray-500">{selectedLead.companyOrganization || "Klien Mandiri"}</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2 text-maroa-charcoal">
                  <Mail className="h-4 w-4 text-maroa-red shrink-0" />
                  <a href={`mailto:${selectedLead.email}`} className="hover:underline font-medium">
                    {selectedLead.email}
                  </a>
                </div>
                {selectedLead.phone && (
                  <div className="flex items-center gap-2 text-maroa-charcoal">
                    <Phone className="h-4 w-4 text-maroa-red shrink-0" />
                    <span>{selectedLead.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-maroa-charcoal">
                  <Building className="h-4 w-4 text-maroa-red shrink-0" />
                  <span>Anggaran: {selectedLead.projectBudget || "Belum ditentukan"}</span>
                </div>
                <div className="flex items-center gap-2 text-maroa-charcoal">
                  <Calendar className="h-4 w-4 text-maroa-red shrink-0" />
                  <span>Target Waktu: {selectedLead.projectTimeline || "Fleksibel"}</span>
                </div>
              </div>

              <div className="p-4 rounded-maroa-sm bg-maroa-gray-100 text-xs text-maroa-ink space-y-1">
                <span className="font-semibold text-maroa-charcoal block">Pesan Kebutuhan:</span>
                <p className="leading-relaxed whitespace-pre-wrap">{selectedLead.message}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-maroa-gray-100">
                <span className="text-xs font-semibold text-maroa-charcoal block">
                  Perbarui Status Penanganan (Cloud Firestore):
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(["new", "contacted", "qualified", "won", "lost", "spam"] as LeadStatus[]).map(
                    (st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => {
                          if (selectedLead?.id) {
                            updateLeadStatus(selectedLead.id, st);
                          }
                        }}
                        className={`py-1.5 px-2 rounded text-[11px] font-semibold capitalize border transition-colors cursor-pointer ${
                          selectedLead.status === st
                            ? "bg-maroa-black text-white border-maroa-black shadow-xs"
                            : "bg-white border-maroa-gray-300 text-maroa-charcoal hover:bg-maroa-gray-100"
                        }`}
                      >
                        {st}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-maroa-white border border-maroa-gray-300 rounded-maroa-md p-8 shadow-card text-center text-xs text-maroa-gray-500">
              Pilih salah satu prospek dari daftar di sebelah kiri untuk melihat rincian dan memperbarui status.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
