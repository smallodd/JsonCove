import Link from "next/link";
import { ArrowRight, Braces, Check, GitCompareArrows, LayoutGrid, LockKeyhole, Sparkles, Table2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Index() {
  const t = await getTranslations("Landing");
  const features = [
    {
      icon: LayoutGrid,
      title: t("graphTitle"),
      description: t("graphDescription"),
      detail: t("graphDetail"),
      color: "bg-[#d9f1e6]",
    },
    {
      icon: Table2,
      title: t("tableTitle"),
      description: t("tableDescription"),
      detail: t("tableDetail"),
      color: "bg-[#fce6d6]",
    },
    {
      icon: GitCompareArrows,
      title: t("compareTitle"),
      description: t("compareDescription"),
      detail: t("compareDetail"),
      color: "bg-[#e4e8fb]",
    },
    {
      icon: Sparkles,
      title: t("toolsTitle"),
      description: t("toolsDescription"),
      detail: t("toolsDetail"),
      color: "bg-[#f5edcc]",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#f8f8f3] text-[#173d36]">
      <section className="relative isolate px-5 pb-24 pt-16 sm:px-10 lg:px-16 lg:pb-32 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 18%, #d9f1e6 0, transparent 32%), radial-gradient(circle at 8% 85%, #f8e7d5 0, transparent 32%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#bcd3c7] bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-[#427565] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#4fa583]" />
              {t("eyebrow")}
            </div>
            <h1 className="text-balance text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-[4.35rem]">
              {t("heroTitle")}
              <span className="block text-[#4b9878]">{t("heroAccent")}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#597169]">{t("heroDescription")}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/editor"
                className="inline-flex h-12 items-center gap-3 rounded-xl bg-[#173d36] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#27594d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173d36]"
              >
                {t("openEditor")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tutorial"
                className="inline-flex h-12 items-center rounded-xl border border-[#cadbd1] bg-white/80 px-6 text-sm font-semibold text-[#173d36] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173d36]"
              >
                {t("exploreGuides")}
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#597169]">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[#4b9878]" />
                {t("noAccount")}
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[#4b9878]" />
                {t("localProcessing")}
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rotate-[-2deg] rounded-[2.5rem] border border-[#dce7df] bg-white/40"
            />
            <div className="relative overflow-hidden rounded-[1.65rem] border border-[#d0dfd5] bg-white shadow-[0_28px_80px_-35px_rgba(20,61,51,0.32)]">
              <div className="flex h-12 items-center justify-between border-b border-[#e2eae4] bg-[#f4f7f2] px-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#edb09a]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#eddb9a]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#a3d3b6]" />
                </div>
                <span className="text-xs font-medium text-[#6e857b]">{"sample.json"}</span>
                <Braces className="h-4 w-4 text-[#6e857b]" />
              </div>
              <div className="grid min-h-[330px] grid-cols-1 sm:grid-cols-[0.85fr_1.15fr]">
                <div className="border-b border-[#e2eae4] bg-[#fcfdfb] px-6 py-7 font-mono text-[13px] leading-8 text-[#476458] sm:border-b-0 sm:border-r">
                  <div className="mb-4 flex items-center justify-between font-sans text-xs font-semibold tracking-wide text-[#6e857b] uppercase">
                    <span>{t("previewSource")}</span>
                    <span>{"JSON"}</span>
                  </div>
                  <div className="text-[#b37b5a]">{"{"}</div>
                  <div className="pl-5">
                    <span className="text-[#9b684f]">{'"project"'}</span>
                    {": "}
                    <span className="text-[#326d8a]">{'"JsonCove"'}</span>
                    {","}
                  </div>
                  <div className="pl-5">
                    <span className="text-[#9b684f]">{'"views"'}</span>
                    {": ["}
                  </div>
                  <div className="pl-10 text-[#326d8a]">{'"graph", "table"'}</div>
                  <div className="pl-5">{"]"}</div>
                  <div className="text-[#b37b5a]">{"}"}</div>
                </div>
                <div className="relative min-h-[310px] bg-[#f3f8f3] px-6 py-7">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-35"
                    style={{
                      backgroundImage: "radial-gradient(#a6c8b5 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <div className="relative mb-8 flex items-center justify-between text-xs font-semibold tracking-wide text-[#6e857b] uppercase">
                    <span>{t("previewStructure")}</span>
                    <LayoutGrid className="h-4 w-4" />
                  </div>
                  <div className="relative mx-auto max-w-[240px]">
                    <div className="rounded-xl border border-[#b8d7c5] bg-[#dff2e7] px-4 py-2.5 text-center text-sm font-semibold shadow-sm">
                      {"root"} <span className="ml-1 font-normal text-[#62907c]">{"{2}"}</span>
                    </div>
                    <div className="mx-auto h-6 w-px bg-[#8fbaa4]" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-[#d4e1d8] bg-white px-3 py-2 text-center text-xs font-medium shadow-sm">
                        {"project"}
                      </div>
                      <div className="rounded-xl border border-[#d4e1d8] bg-white px-3 py-2 text-center text-xs font-medium shadow-sm">
                        {"views"} <span className="text-[#8aa297]">{"[2]"}</span>
                      </div>
                    </div>
                    <div className="ml-auto mr-[22%] h-6 w-px bg-[#8fbaa4]" />
                    <div className="ml-auto w-[47%] space-y-2">
                      <div className="rounded-lg border border-[#d4e1d8] bg-white px-3 py-1.5 text-xs text-[#487867] shadow-sm">
                        {"0 · graph"}
                      </div>
                      <div className="rounded-lg border border-[#d4e1d8] bg-white px-3 py-1.5 text-xs text-[#487867] shadow-sm">
                        {"1 · table"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-[#e2eae4] bg-white px-5 py-3 text-xs text-[#70867b]">
                <span>{t("previewCaption")}</span>
                <span className="inline-flex items-center gap-1.5 text-[#4b9878]">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {t("browserOnly")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dce7df] bg-white px-5 py-7 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-center text-sm text-[#64796e] sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="font-semibold text-[#254e41]">{t("stripIntro")}</span>
          <span>{t("stripGraph")}</span>
          <span>{t("stripCompare")}</span>
          <span>{t("stripTransform")}</span>
          <span>{t("stripExport")}</span>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-11 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#4b9878]">{t("featuresEyebrow")}</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t("featuresTitle")}
            </h2>
            <p className="mt-5 text-base leading-7 text-[#657b71]">{t("featuresDescription")}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group flex min-h-[260px] flex-col rounded-[1.5rem] border border-[#dce7df] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(20,61,51,0.4)] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-[#9bb1a4]">{`/0${index + 1}`}</span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-[#657b71]">{feature.description}</p>
                  <span className="mt-auto pt-6 text-xs font-medium text-[#3f9071]">{feature.detail}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#e6f1e9] px-5 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/70">
              <LockKeyhole className="h-5 w-5" />
            </div>
            <h2 className="max-w-xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t("privacyTitle")}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#547568]">{t("privacyDescription")}</p>
          </div>
          <div className="rounded-[1.5rem] border border-[#bfd9c8] bg-white/75 p-7 sm:p-9">
            <div className="flex items-center gap-3 border-b border-[#e0ede3] pb-5">
              <Braces className="h-5 w-5 text-[#3f9071]" />
              <span className="font-semibold">{t("privacyCardTitle")}</span>
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[#547568]">
              {[t("privacyPointOne"), t("privacyPointTwo"), t("privacyPointThree")].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#4b9878]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#4b9878]">{t("finalEyebrow")}</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{t("finalTitle")}</h2>
          <p className="mt-5 text-base leading-7 text-[#657b71]">{t("finalDescription")}</p>
          <Link
            href="/editor"
            className="mt-8 inline-flex h-12 items-center gap-3 rounded-xl bg-[#173d36] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#27594d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173d36]"
          >
            {t("openEditor")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
