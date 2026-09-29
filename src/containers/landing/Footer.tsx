import Link from "next/link";
import MdxPage from "@/app/(home)/(mdx)/MdxPage";
import { type Href } from "@/components/LinkButton";
import GitHub from "@/components/icons/GitHub";
import Logo from "@/components/icons/Logo";
import Twitter from "@/components/icons/Twitter";
import Weibo from "@/components/icons/Weibo";
import { siteConfig } from "@/lib/site-config";
import { useTranslations } from "next-intl";
import LegalDialog from "./LegalDialog";

export default function Footer() {
  const t = useTranslations("Home");
  const items: FooterLinkProps[] = [
    ...(siteConfig.reviewUrl ? [{ href: siteConfig.reviewUrl, title: t("Give a rating") }] : []),
    ...(siteConfig.feedbackUrl ? [{ href: siteConfig.feedbackUrl, title: t("Feedback") }] : []),
    ...(siteConfig.socialWeiboUrl ? [{ href: siteConfig.socialWeiboUrl, title: <Weibo className="icon" /> }] : []),
    ...(siteConfig.socialXUrl ? [{ href: siteConfig.socialXUrl, title: <Twitter className="icon" /> }] : []),
    ...(siteConfig.repositoryUrl ? [{ href: siteConfig.repositoryUrl, title: <GitHub className="icon" /> }] : []),
  ];

  return (
    <footer className="flex min-h-24 w-full items-center justify-center bg-[#173d36] py-7 text-white/70">
      <div className="flex w-full max-w-page-header flex-col items-center gap-4 px-5 text-xs sm:flex-row sm:gap-x-8 sm:px-10 lg:px-16">
        <div className="flex items-center gap-2 shrink-0">
          <Logo className="h-5 w-5 invert" />
          <span className="whitespace-nowrap">{`© ${new Date().getFullYear()} ${siteConfig.name}`}</span>
        </div>
        <span className="text-center">
          {"Based on "}
          <Link href="https://github.com/loggerhead/json4u" target="_blank" rel="noopener" className="hover:text-white">
            {"JSON For You"}
          </Link>
          {" by loggerhead"}
        </span>
        <div className="flex items-center gap-4 sm:gap-8 sm:ml-0">
          <Legal />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 sm:ml-auto">
          {items.map((item, i) => (
            <FooterLink key={i} title={item.title} href={item.href} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function Legal() {
  const t = useTranslations("Legal");

  return (
    <div className="flex items-center lg:gap-8 lg:ml-0 ml-auto gap-4">
      <LegalDialog
        title={t("termsTitle")}
        description={t("termsDescription")}
        href="/terms"
        openPageLabel={t("openPage")}
        closeLabel={t("close")}
      >
        <MdxPage dir="(mdx)/terms" plain />
      </LegalDialog>
      <LegalDialog
        title={t("privacyTitle")}
        description={t("privacyDescription")}
        href="/privacy"
        openPageLabel={t("openPage")}
        closeLabel={t("close")}
      >
        <MdxPage dir="(mdx)/privacy" plain />
      </LegalDialog>
    </div>
  );
}

interface FooterLinkProps {
  href: string;
  title: string | JSX.Element;
  nofollow?: boolean;
}

function FooterLink({ href, title, nofollow }: FooterLinkProps) {
  return (
    <Link
      prefetch={false}
      href={href as Href}
      target={href.startsWith("/") ? "" : "_blank"}
      rel={nofollow ? "nofollow noopener" : "noopener"}
      className="pointer block w-fit transition-colors hover:text-white"
    >
      {title}
    </Link>
  );
}
