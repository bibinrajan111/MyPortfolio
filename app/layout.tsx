import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bibin Rajan | Data Analyst Portfolio",
  description:
    "Data Analyst portfolio for Bibin Rajan: full-stack analytics, SQL optimization, BI dashboards, and business storytelling for financial services.",
  keywords: ["Data Analyst", "SQL", "Power BI", "React", "Analytics Engineer", "Munich"],
  openGraph: {
    title: "Bibin Rajan | Turning Financial Data into Business Decisions",
    description: "Premium portfolio showing full-stack analytics expertise in mortgages and insurance.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
