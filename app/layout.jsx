import { mainFont } from "@/libs/font";
import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/global.css";
import { Footer } from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mainFont.className}>
      <head />
      <body className="layout">
        <div aria-hidden="true" className="overlay" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
