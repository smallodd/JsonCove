import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, LockKeyhole } from "lucide-react";
import { getTranslations } from "next-intl/server";
import MdxPage from "./MdxPage";

export default async function LegalPage({ kind, dir }: { kind: "privacy" | "terms"; dir: string }) {
  const t = await getTranslations("Legal");
  const isPrivacy = kind === "privacy";
  const Icon = isPrivacy ? LockKeyhole : FileText;

  return (
    <div className="min-h-screen w-full bg-[#f8f8f3] px-5 py-12 text-[#173d36] sm:px-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#568271] hover:text-[#173d36]"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backHome")}
        </Link>

        <article className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#dce7df] bg-white shadow-[0_24px_60px_-40px_rgba(20,61,51,0.25)]">
          <div className="border-b border-[#dce7df] bg-[#f3f8f3] px-7 py-8 sm:px-10 sm:py-10">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff2e7] text-[#32775b]">
              <Icon className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              {isPrivacy ? t("privacyTitle") : t("termsTitle")}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#597169]">
              {isPrivacy ? t("privacyDescription") : t("termsDescription")}
            </p>
          </div>
          <div className="legal-content px-7 py-8 sm:px-10 sm:py-10">
            <MdxPage dir={dir} plain />
          </div>
          <div className="border-t border-[#e2eae4] px-7 py-6 sm:px-10">
            <Link
              href={isPrivacy ? "/terms" : "/privacy"}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3f9071] hover:text-[#205a46]"
            >
              {isPrivacy ? t("readTerms") : t("readPrivacy")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
