import {Figtree} from "next/font/google";
import "./globals.css";

const readex_pro = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"], weight: ["400","500", "600", "700"]
});

const teal = "#193A4A";

export const metadata = {
  title: "Caleb Hu",
  description: "My personal portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${readex_pro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
