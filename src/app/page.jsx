import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import DashboardClient from "./components/DashboardClient";

export const metadata = {
  title: "User Profile Details | DegreeFYD Dashboard",
  description: "View and edit your personal educational preferences, secondary email, current city, state location, and parent details on DegreeFYD.",
  alternates: {
    canonical: "https://degreefyd.com/",
  },
  openGraph: {
    title: "User Profile Details | DegreeFYD Dashboard",
    description: "View and edit your personal educational preferences, secondary email, current city, state location, and parent details on DegreeFYD.",
    url: "https://degreefyd.com/",
    siteName: "DegreeFYD",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "User Profile Details | DegreeFYD Dashboard",
    description: "View and edit your personal educational preferences, secondary email, current city, state location, and parent details on DegreeFYD.",
  },
};

export default function Home() {
  // Structured Data (JSON-LD) for SEO Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "User Profile Details | DegreeFYD Dashboard",
    "description": "View and edit your personal educational preferences, secondary email, current city, state location, and parent details on DegreeFYD.",
    "url": "https://degreefyd.com/",
    "isPartOf": {
      "@type": "WebSite",
      "name": "DegreeFYD",
      "url": "https://degreefyd.com/"
    }
  };

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen bg-bg-page font-body pt-14 lg:pt-[110px]">
        <Header />

        <main className="flex flex-col lg:flex-row flex-1 pt-10 pb-10 pr-4 pl-4 lg:pr-8 lg:pl-6 xl:pr-12 gap-6 w-full">
          <Sidebar />
          <DashboardClient />
        </main>

        <Footer />
      </div>
    </>
  );
}
