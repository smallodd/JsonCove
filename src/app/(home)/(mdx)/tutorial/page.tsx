import DocsPage from "../DocsPage";
import { mdxGenMetadata } from "../MdxPage";

export async function generateMetadata() {
  return mdxGenMetadata(__dirname);
}

export default async function Page() {
  return <DocsPage kind="tutorial" dir={__dirname} />;
}
