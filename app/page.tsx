import dynamic from "next/dynamic";

const PortfolioPage = dynamic(() => import("@/components/portfolio-page"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-bg" />
});

export default function Home() {
  return <PortfolioPage />;
}
