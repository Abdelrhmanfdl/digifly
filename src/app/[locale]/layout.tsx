import { IntlProviderHOC } from "../providors/IntlProvider";

export default function Layout({ children, params: { locale } }: any) {
  return <IntlProviderHOC locale={locale}>{children}</IntlProviderHOC>;
}
