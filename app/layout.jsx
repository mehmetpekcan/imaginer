import { Inter } from "@next/font/google";

import "../styles/reset.css";
import "../styles/variables.css";
import "../styles/global.css";
import { Footer } from "../components/footer";

const mainFont = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mainFont.className}>
      <head />
      <body className="layout">
        <div className="overlay"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
