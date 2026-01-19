// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-14">
        {/* Hero */}
        <header className="space-y-4">
          <p className="text-sm text-neutral-600">Dongqing (Doreen) Li</p>
          <h1 className="text-3xl font-semibold leading-tight">
            AI Product Manager building usable AI products in complex business environments.
          </h1>
          <p className="text-base text-neutral-700">
            From problem framing to AI-powered decision systems.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              className="rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
            >
              Download Resume
            </a>

            <Link
              href="/demo"
              className="pointer-events-none rounded-xl border border-neutral-200 px-4 py-2 text-sm text-neutral-400"
              aria-disabled="true"
              tabIndex={-1}
              title="Coming soon"
            >
              Try AI Demo (Coming soon)
            </Link>
          </div>
        </header>

        {/* Projects preview */}
        <section className="pt-10">
          <h2 className="text-lg font-medium">Selected Projects</h2>
          <div className="mt-4 grid gap-4">
            <ProjectCard
              title="Law Shield — Enterprise LLM Governance Gateway"
              desc="Product design for controlling LLM usage with input guardrails, policy checks, and output auditing."
              href="/projects#law-shield"
            />
            <ProjectCard
              title="MedTech Enterprise AI Data Platform (Azure)"
              desc="Enterprise AI enablement: data + compute platform design with security governance (RBAC + isolation)."
              href="/projects#medtech-azure"
            />
            <ProjectCard
              title="CRM & BI — Data-driven Decision Systems"
              desc="B2B SaaS process standardization and lifecycle KPI framework to support business decisions."
              href="/projects#crm-bi"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 text-sm text-neutral-500">
          <div className="flex flex-wrap gap-4">
            <a className="underline hover:text-neutral-700" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="underline hover:text-neutral-700" href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="underline hover:text-neutral-700" href="mailto:your@email.com">
              Email
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function ProjectCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-neutral-200 p-5 hover:border-neutral-300 hover:bg-neutral-50"
    >
      <div className="text-base font-medium">{title}</div>
      <div className="mt-2 text-sm text-neutral-700">{desc}</div>
    </Link>
  );
}
