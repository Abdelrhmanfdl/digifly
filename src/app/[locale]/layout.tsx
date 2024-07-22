import { IntlProviderHOC } from "../providors/IntlProvider";

export default function Layout({ children, params: { locale } }: any) {
  return (
    <div lang={locale}>
      <IntlProviderHOC locale={locale}>{children}</IntlProviderHOC>
    </div>
  );
}
