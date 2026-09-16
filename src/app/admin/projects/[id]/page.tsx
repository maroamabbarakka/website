import React from "react";
import { initialProjects } from "@/data/initialData";
import { notFound } from "next/navigation";
import { EditProjectClient } from "./EditProjectClient";

export function generateStaticParams() {
  return initialProjects.map((p) => ({
    id: p.id,
  }));
}

export default async function AdminProjectEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = initialProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <EditProjectClient initialProject={project} />;
}
