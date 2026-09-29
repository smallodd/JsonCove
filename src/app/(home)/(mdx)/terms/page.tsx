import LegalPage from "../LegalPage";
import { mdxGenMetadata } from "../MdxPage";

export async function generateMetadata() {
  return mdxGenMetadata(__dirname);
}

export default async function Page() {
  return <LegalPage kind="terms" dir={__dirname} />;
}
