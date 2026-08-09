import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";
import { dict, hreflangAlternates } from "@/lib/i18n";
import ProjectDetail, { getProjectBySlug } from "@/components/ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.filter((p) => !p.wip).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Supra Studio`,
    description: `${project.cat} — ${project.name}, ${project.location}. ${dict.it.meta.projectSuffix}`,
    alternates: hreflangAlternates(`/projets/${project.slug}`, "it"),
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ProjectDetail slug={params.slug} lang="it" />;
}
