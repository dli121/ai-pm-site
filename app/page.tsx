// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import { contentZh } from "@/lib/content.zh";

// 如果你还没做英文内容文件，先不用管这一行；有的话再启用
// import { contentEn } from "@/lib/content.en";

export default function Home() {
  const { lang, toggleLang } = useLanguage();

  // ✅ 先用中文；如果你已经有 contentEn，就把下面这行替换为：lang === "zh" ? contentZh : contentEn
  const t = contentZh;

  const projectsPreview = t.projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Top bar */}
        <div className="flex items-center justify-end text-xs uppercase tracking-[0.2em] text-neutral-500">
          <button
            onClick={toggleLang}
            className="text-xs text-neutral-500 hover:text-neutral-900"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
        </div>

        {/* Hero */}
        <header className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Portfolio
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              {t.home.heroTitle}
            </h1>
            <p className="text-base leading-relaxed text-neutral-700">
              {t.home.heroSubtitle}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2 text-sm">
              <Link
                href="/projects"
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                查看项目
              </Link>

              <a
                href="/resume.pdf"
                className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 hover:border-neutral-300 hover:text-neutral-900"
              >
                下载简历
              </a>

              <span className="rounded-full border border-dashed border-neutral-300 px-4 py-2 text-sm text-neutral-400">
                体验 AI Demo（即将上线）
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-100 shadow-sm">
            <Image
              src="/portrait.JPG"
              alt="Portrait"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 90vw"
            />
          </div>
        </header>

        {/* Business value */}
        <section className="mt-14 border-t border-neutral-200/70 pt-10">
          <SectionTitle title="业务价值" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.home.valueProps.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <div className="text-sm font-semibold text-neutral-900">
                  {item.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Metrics */}
        <section className="mt-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {t.home.metrics.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-neutral-200 bg-white p-5 text-center"
              >
                <div className="text-lg font-semibold">{item.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects preview */}
        <section className="mt-14 border-t border-neutral-200/70 pt-10">
          <SectionTitle title="精选项目" />

          {/* ✅ 就是这块：如果你之前没有这一段，就会出现你截图的“标题下面空白” */}
          <div className="mt-8 grid gap-4">
            {projectsPreview.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                desc={p.problem}
                href={`/projects#${p.id}`}
              />
            ))}
          </div>
        </section>

        {/* Technical projects */}
        <section className="mt-14 border-t border-neutral-200/70 pt-10">
          <SectionTitle title="技术实践" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.home.technicalProjects.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, 90vw"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-xs text-neutral-500">
                  {item.metrics.map((metric) => (
                    <li key={metric} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-300" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Credibility / footer */}
        <footer className="mt-14 border-t border-neutral-200/70 pt-8 text-xs uppercase tracking-[0.2em] text-neutral-500">
          {t.home.credibility}
        </footer>
      </div>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
        Section
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h2>
    </div>
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
      className="group block rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-sm"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-neutral-900">{title}</div>
        <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 group-hover:text-neutral-600">
          View
        </span>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-3">
        {desc}
      </div>
    </Link>
  );
}
