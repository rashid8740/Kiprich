import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

config.autoAddCss = false;

export const metadata = {
  title: "Kiprich Safaris",
  description: "Discover Kenya's Wonders with expert-guided safaris",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fcfaf8] text-[#1c150d]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
