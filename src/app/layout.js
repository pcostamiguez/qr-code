import { Outfit } from "next/font/google";
import "./globals.css";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fontend Mentor QR Code Challenge",
  description: "Created by Pedro Henrique for Frontend Mentor",
  author: "Pedro Henrique Costa Miguez - github.com/pcostamiguez",
  keywords: "Frontend Mentor, QR Code, Challenge, Pedro Henrique Costa Miguez",
  icons: {
    icon: "/favicon-32x32.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfitSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
