import { IntlProviderHOC } from "../providors/IntlProvider";

export default function Layout({ children, params: { locale } }: any) {
  return (
    <div className="locale-root" lang={locale}>
      <IntlProviderHOC locale={locale}>{children}</IntlProviderHOC>
    </div>
  );
}
