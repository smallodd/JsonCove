import Link from "next/link";
import { type Href } from "@/components/LinkButton";
import GitHub from "@/components/icons/GitHub";
import Logo from "@/components/icons/Logo";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Home");
  const items = [
    { href: "/tutorial", title: t("Tutorial") },
    { href: "/changelog", title: t("Changelog") },
  ];

  return (
    <div className="sticky top-0 z-20 flex h-16 w-full items-center justify-center border-b border-[#dce7df] bg-[#f8f8f3]/95 backdrop-blur-md">
      <nav className="flex h-full w-full max-w-page-header items-center px-5 sm:px-10 lg:px-16">
        <Link prefetch={false} href="/" className="mr-9 flex items-center gap-2.5 text-[#173d36]">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d9f1e6]">
            <Logo size={22} />
          </span>
          <span className="text-lg font-semibold tracking-[-0.04em]">{siteConfig.name}</span>
        </Link>
        <div className="hidden items-center gap-7 sm:flex">
          {items.map((item) => (
            <Link
              prefetch={false}
              href={item.href as Href}
              key={item.title}
              className="text-sm font-medium text-[#61776d] transition-colors hover:text-[#173d36]"
              target={item.href.startsWith("/") ? "" : "_blank"}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="ml-auto" />
        <div className="flex items-center gap-4">
          {siteConfig.repositoryUrl && (
            <Link
              className="hidden text-[#61776d] transition-colors hover:text-[#173d36] md:flex"
              href={siteConfig.repositoryUrl}
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <GitHub className="h-5 w-5" />
            </Link>
          )}
          <Link
            href="/editor"
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#173d36] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#27594d]"
          >
            {t("Editor")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
