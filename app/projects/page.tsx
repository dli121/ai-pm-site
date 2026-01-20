// app/projects/page.tsx
import Link from "next/link";
import { contentZh } from "@/lib/content.zh";

export default function ProjectsPage() {
  const { projects } = contentZh;

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">项目</h1>
          <Link
            className="text-sm underline text-neutral-700 hover:text-neutral-900"
            href="/"
          >
            返回首页
          </Link>
        </div>

        <p className="mt-3 text-neutral-700">
          以下项目集中展示了我作为 AI 产品经理在问题拆解、产品设计与取舍判断方面的实践。
        </p>

        {/* Projects */}
        <div className="mt-10 space-y-12">
          {projects.map((project) => (
            <ProjectBlock
              key={project.id}
              id={project.id}
              title={project.title}
              problem={project.problem}
              designed={project.designed}
              tradeoff={project.tradeoff}
              impact={project.impact}
            />
          ))}
        </div>

        {/* Next */}
        <div className="mt-14 rounded-2xl border border-neutral-200 p-5 text-sm text-neutral-700">
          <div className="font-medium">下一步</div>
          <div className="mt-1">
            我将补充一个 AI Demo（Decision Risk Analyzer），展示我如何使用 AI
            辅助产品决策与风险判断。
          </div>
        </div>
      </div>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Components                                                          */
/* ------------------------------------------------------------------ */

function ProjectBlock({
  id,
  title,
  problem,
  designed,
  tradeoff,
  impact,
}: {
  id: string;
  title: string;
  problem: string;
  designed: string[];
  tradeoff: string;
  impact: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="mt-3 rounded-2xl border border-neutral-200 p-5">
        {/* Problem */}
        <div className="text-sm font-medium text-neutral-900">Problem｜为什么要做</div>
        <p className="mt-1 text-sm text-neutral-700">{problem}</p>

        {/* Designed */}
        <div className="mt-4 text-sm font-medium text-neutral-900">
          What I Designed｜我做了什么
        </div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
          {designed.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Trade-off */}
        <div className="mt-4 text-sm font-medium text-neutral-900">
          Trade-offs｜关键取舍
        </div>
        <p className="mt-1 text-sm text-neutral-700">{tradeoff}</p>

        {/* Impact */}
        <div className="mt-4 text-sm font-medium text-neutral-900">
          Output / Impact｜交付与影响
        </div>
        <p className="mt-1 text-sm text-neutral-700">{impact}</p>
      </div>
    </section>
  );
}
