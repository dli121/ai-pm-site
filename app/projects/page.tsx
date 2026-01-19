// app/projects/page.tsx
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Projects</h1>
          <Link className="text-sm underline text-neutral-700 hover:text-neutral-900" href="/">
            Back
          </Link>
        </div>

        <p className="mt-3 text-neutral-700">
          A small set of projects that best represent how I think and work as an AI Product Manager.
        </p>

        <div className="mt-10 space-y-10">
          <ProjectBlock
            id="law-shield"
            title="Law Shield — Enterprise LLM Governance Gateway"
            problem="Enterprises need to use LLMs without leaking sensitive data or generating non-compliant outputs."
            designed={[
              "Designed a modular governance gateway: Input Guard, Policy Engine, Output Auditor.",
              "Defined configurable policies to adapt controls across different business scenarios and model providers.",
            ]}
            tradeoff="Balanced safety controls with usability to avoid excessive friction or latency."
          />

          <ProjectBlock
            id="medtech-azure"
            title="MedTech Enterprise AI Data Platform (Azure)"
            problem="Enable AI workloads on sensitive medical data with strict access control and scalable architecture."
            designed={[
              "Designed an enterprise AI data & compute platform (ADLS + Azure ML + Databricks).",
              "Implemented dual-layer security governance (RBAC + network isolation) to ensure compliant, auditable access.",
              "Led a business-driven PoC to validate platform usability and permission boundaries under network constraints.",
            ]}
            tradeoff="Kept the design extensible while enforcing least-privilege and minimizing operational complexity."
          />

          <ProjectBlock
            id="crm-bi"
            title="CRM & BI — Data-driven Decision Systems"
            problem="Standardize offline operational processes and turn them into measurable, decision-ready systems."
            designed={[
              "Translated complex offline workflows into configurable B2B SaaS modules (e.g., attendance, scheduling, notifications).",
              "Built lifecycle KPI framework and BI dashboards (LTV, enrollment, consumption, refund) for decision support.",
            ]}
            tradeoff="Prioritized actionable metrics and operational adoption over overly complex analytics."
          />
        </div>

        <div className="mt-12 rounded-2xl border border-neutral-200 p-5 text-sm text-neutral-700">
          <div className="font-medium">Next</div>
          <div className="mt-1">
            This week I’ll add a small AI demo (Decision Risk Analyzer) to show how I use AI to support PM decisions.
          </div>
        </div>
      </div>
    </main>
  );
}

function ProjectBlock({
  id,
  title,
  problem,
  designed,
  tradeoff,
}: {
  id: string;
  title: string;
  problem: string;
  designed: string[];
  tradeoff: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="mt-3 rounded-2xl border border-neutral-200 p-5">
        <div className="text-sm font-medium text-neutral-900">Problem</div>
        <p className="mt-1 text-sm text-neutral-700">{problem}</p>

        <div className="mt-4 text-sm font-medium text-neutral-900">What I designed</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
          {designed.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        <div className="mt-4 text-sm font-medium text-neutral-900">Trade-off</div>
        <p className="mt-1 text-sm text-neutral-700">{tradeoff}</p>
      </div>
    </section>
  );
}
