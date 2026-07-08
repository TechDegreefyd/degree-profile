import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ReferEarnClient from "../components/ReferEarnClient";

export const metadata = {
  title: "Refer & Earn Program | DegreeFYD Rewards",
  description: "Share your unique DegreeFYD referral link with friends and classmates. Earn premium rewards, cashback, and educational counseling bonuses when they sign up.",
  alternates: {
    canonical: "https://degreefyd.com/refer-earn",
  },
  openGraph: {
    title: "Refer & Earn Program | DegreeFYD Rewards",
    description: "Share your unique DegreeFYD referral link with friends and classmates. Earn premium rewards, cashback, and educational counseling bonuses when they sign up.",
    url: "https://degreefyd.com/refer-earn",
    siteName: "DegreeFYD",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Refer & Earn Program | DegreeFYD Rewards",
    description: "Share your unique DegreeFYD referral link with friends and classmates. Earn premium rewards, cashback, and educational counseling bonuses when they sign up.",
  },
};

export default function ReferEarn() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refer & Earn Program | DegreeFYD Rewards",
    "description": "Share your unique DegreeFYD referral link with friends and classmates. Earn premium rewards, cashback, and educational counseling bonuses when they sign up.",
    "url": "https://degreefyd.com/refer-earn",
    "isPartOf": {
      "@type": "WebSite",
      "name": "DegreeFYD",
      "url": "https://degreefyd.com/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen bg-bg-page font-body pt-14 lg:pt-[110px]">
        <Header />

        <main className="flex flex-col lg:flex-row flex-1 pt-10 pb-10 pr-4 pl-4 lg:pr-8 lg:pl-6 xl:pr-12 gap-6 w-full">
          <Sidebar />
          <ReferEarnClient />
        </main>

        <Footer />
      </div>
    </>
  );
}
