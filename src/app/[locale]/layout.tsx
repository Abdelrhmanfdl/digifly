import { IntlProviderHOC } from "../providors/IntlProvider";

export default function Layout({ children, params: { locale } }: any) {
  return (
    <html lang={locale}>
      <IntlProviderHOC locale={locale}>{children}</IntlProviderHOC>
    </html>
  );
}
