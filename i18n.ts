import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const languageCookie = cookieStore.get("NEXT_LOCALE");

  const locale = languageCookie ? languageCookie.value : "pl";

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
