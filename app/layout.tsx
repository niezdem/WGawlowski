import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Poppins } from "next/font/google";

import Footer from "./components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wgawlowski.com"),
  title: {
    default: "Wojciech Gawłowski",
    template: "%s | Wojciech Gawłowski",
  },
  description:
    "Profesjonalne spawanie, instalacja i serwis klimatyzacji oraz ogrzewania",
  keywords:
    "Wojciech Gawłowski, Wojciech, Gawłowski, spawanie, usługi spawalnicze, klimatyzacja, instalacja, instalacja klimatyzacji, Wrocław, spawacz, montaż klimatyzacji, serwis klimatyzacji, naprawa klimatyzacji, montaż systemów grzewczych, instalacja ogrzewania, serwis systemów grzewczych, naprawa systemów grzewczych, instalacja kotłów, instalacja systemów wentylacyjnych, usługi instalacyjne, instalacja pomp ciepła, konserwacja klimatyzacji, instalacje HVAC, systemy wentylacyjne, technik HVAC, serwis urządzeń grzewczych, technika grzewcza, klimatyzatory, montaż pieców, naprawa pieców, ogrzewanie podłogowe, montaż ogrzewania, serwis instalacji grzewczych, welding services, welder, metal welding, air conditioning installation, HVAC services, heating system installation, air conditioner installation, Wroclaw HVAC, air conditioner repair, heating system repair, HVAC maintenance, climate control systems, installation services, heating equipment installation, boiler installation, ventilation system installation, heat pump installation, air conditioning servicing, welding and metalwork, professional welder, HVAC technician, industrial welding, home heating installation, floor heating systems, furnace installation, furnace repair, air conditioning setup, custom welding solutions, metal fabrication, cooling system installation, cooling system maintenance, welding in Wroclaw, welding services Wroclaw",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          {/* <NavBar /> */}
          <main className="isolate">
            {/* <BackButton /> */}
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
