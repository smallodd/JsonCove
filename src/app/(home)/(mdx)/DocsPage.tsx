import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, History } from "lucide-react";
import { getTranslations } from "next-intl/server";
import MdxPage from "./MdxPage";

export default async function DocsPage({ kind, dir }: { kind: "tutorial" | "changelog"; dir: string }) {
  const t = await getTranslations("Docs");
  const isTutorial = kind === "tutorial";
  const Icon = isTutorial ? BookOpen : History;

  return (
    <div className="w-full min-h-screen bg-[#f8f8f3] text-[#173d36]">
      <section
        className="border-b border-[#dce7df] px-5 pb-16 pt-12 sm:px-10 lg:px-16 lg:pb-20 lg:pt-16"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 18%, #d9f1e6 0, transparent 32%), radial-gradient(circle at 8% 90%, #f8e7d5 0, transparent 34%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#568271] hover:text-[#173d36]"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backHome")}
          </Link>
          <div className="mt-10 flex h-12 w-12 items-center justify-center rounded-xl border border-[#c5ddce] bg-white/80 text-[#32775b]">
            <Icon className="h-5 w-5" />
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#4b9878]">
            {isTutorial ? t("tutorialEyebrow") : t("changelogEyebrow")}
          </p>
          <h1 className="mt-3 text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
            {isTutorial ? t("tutorialTitle") : t("changelogTitle")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#597169]">
            {isTutorial ? t("tutorialDescription") : t("changelogDescription")}
          </p>
          {isTutorial && (
            <Link
              href="/editor"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-xl bg-[#173d36] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#27594d]"
            >
              {t("openEditor")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </section>

      <section className="px-5 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {isTutorial ? (
            <article className="markdown-body docs-content docs-tutorial rounded-[1.75rem] border border-[#dce7df] bg-white p-7 shadow-[0_24px_60px_-40px_rgba(20,61,51,0.2)] sm:p-10 lg:p-12">
              <MdxPage dir={dir} plain />
            </article>
          ) : (
            <div className="docs-content docs-changelog">
              <MdxPage dir={dir} plain />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
