"use client";
import { IntlProvider } from "next-intl";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  locale: string;
}

export function IntlProviderHOC({ children, locale }: Props) {
  const messages = require(`~/messages/${locale}.json`);
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
