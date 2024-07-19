import { IntlProviderHOC } from "../providors/IntlProvider";

export default function Layout({ children, params: { locale } }: any) {
  return (
    <html lang={locale}>
      <body>
        <IntlProviderHOC locale={locale}>{children}</IntlProviderHOC>
      </body>
    </html>
  );
}
