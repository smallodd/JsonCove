import { getLocale } from "next-intl/server";

function getRelativePath(dir: string) {
  const p = dir.split("(mdx)")[1];
  return "." + p;
}

export async function mdxGenMetadata(dir: string) {
  const locale = await getLocale();
  const mdx = await import(`${getRelativePath(dir)}/${locale}.mdx`);
  return { ...mdx.metadata };
}

export default async function MdxPage({ dir, plain = false }: { dir: string; plain?: boolean }) {
  const locale = await getLocale();
  const Content = (await import(`${getRelativePath(dir)}/${locale}.mdx`)).default;
  if (plain) return <Content />;

  return (
    <div className="w-full min-h-screen bg-[#f8f8f3] px-5 py-12 text-[#173d36] sm:px-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="markdown-body docs-content rounded-[1.5rem] border border-[#dce7df] bg-white p-7 shadow-[0_24px_60px_-40px_rgba(20,61,51,0.2)] sm:p-10 lg:p-12">
          <Content />
        </div>
      </div>
    </div>
  );
}
