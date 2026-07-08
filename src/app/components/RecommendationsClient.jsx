"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { PinIcon } from "./Icons";
import { LOGO_COMPONENTS } from "./CollegeLogos";
import DegreeSearchDropdown from "./DegreeSearchDropdown";

const DEFAULT_RECOMMENDATIONS = [
  {
    id: "college-2",
    name: "Amity University Online",
    nirfRank: "#4 NIRF Rank",
    location: "Noida, Uttar Prade...",
    logoKey: "Amity",
  },
  {
    id: "college-3",
    name: "GLA University Online",
    nirfRank: "#13 NIRF Rank",
    location: "Mathura, Uttar Pra...",
    logoKey: "Gla",
  },
  {
    id: "college-5",
    name: "Sharda University Online",
    nirfRank: "#21 NIRF Rank",
    location: "Greater Noida, Utt...",
    logoKey: "Sharda",
  },
];

const DEFAULT_SHORTLISTED = [
  {
    id: "college-1",
    name: "Alagappa University",
    nirfRank: "#134 NIRF Rank",
    location: "Hyderabad",
    logoKey: "Alagappa",
    selectedCourse: "Online BBA",
  },
  {
    id: "college-4",
    name: "LPU Online",
    nirfRank: "#1 NIRF Rank",
    location: "Phagwada, Punjab",
    logoKey: "Lpu",
    selectedCourse: "Online MBA",
  },
];

export default function RecommendationsClient() {
  const [recommendations, setRecommendations] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  // Initialize data from localStorage on mount
  useEffect(() => {
    const recs = localStorage.getItem("degreefyd_recommendations");
    const shorts = localStorage.getItem("degreefyd_shortlisted");

    if (recs) {
      setRecommendations(JSON.parse(recs));
    } else {
      localStorage.setItem("degreefyd_recommendations", JSON.stringify(DEFAULT_RECOMMENDATIONS));
      setRecommendations(DEFAULT_RECOMMENDATIONS);
    }

    if (!shorts) {
      localStorage.setItem("degreefyd_shortlisted", JSON.stringify(DEFAULT_SHORTLISTED));
    }
  }, []);

  const handleSelectDegree = (college, degree) => {
    // 1. Remove college from recommendations list
    const updatedRecs = recommendations.filter((r) => r.id !== college.id);
    setRecommendations(updatedRecs);
    localStorage.setItem("degreefyd_recommendations", JSON.stringify(updatedRecs));

    // 2. Add college to shortlisted list with selectedCourse
    const shorts = localStorage.getItem("degreefyd_shortlisted");
    const currentShorts = shorts ? JSON.parse(shorts) : [];
    
    // Check if college already exists in shortlist (to avoid duplicates)
    const exists = currentShorts.find((s) => s.id === college.id);
    let updatedShorts;
    if (exists) {
      updatedShorts = currentShorts.map((s) => 
        s.id === college.id ? { ...s, selectedCourse: degree } : s
      );
    } else {
      updatedShorts = [...currentShorts, { ...college, selectedCourse: degree }];
    }

    localStorage.setItem("degreefyd_shortlisted", JSON.stringify(updatedShorts));

    // 3. Show Toast success message
    setToastMessage(`"${college.name}" shortlisted for ${degree}!`);
    setTimeout(() => setToastMessage(""), 4000);
  };

  return (
    <div className="flex flex-col min-h-screen lg:min-h-[1110px] max-w-[1440px] mx-auto w-full bg-bg-page font-body shadow-sm pt-14 lg:pt-[110px] relative">
      <Header />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-10 right-10 bg-primary text-white py-3.5 px-6 rounded-lg shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 font-medium text-[13px] flex items-center gap-3 border border-sky-900">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
          {toastMessage}
        </div>
      )}

      <main className="flex flex-col lg:flex-row flex-1 pt-6 pb-6 px-4 lg:px-[100px] gap-4 w-full">
        <Sidebar />

        {/* Right Content Panel - Recommended Colleges */}
        <section className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-text-dark font-title mt-2">Recommended colleges</h1>
            <p className="text-[13px] text-text-light mt-1">Select a course to automatically shortlist and save a college.</p>
          </div>

          {/* Cards Grid */}
          {recommendations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((college) => {
                const LogoComponent = LOGO_COMPONENTS[college.logoKey];
                return (
                  <div 
                    key={college.id} 
                    className="bg-[#FFF] border border-[#CFD8DE] rounded-[8px] p-4 w-full sm:w-[327px] h-[195px] hover:border-slate-400 transition-all flex flex-col items-start justify-between gap-3 shadow-sm"
                  >
                    <div className="w-full">
                      {/* Top Row: Logo & Rank Badge / Location */}
                      <div className="flex items-start justify-between w-full">
                        <div className="w-14 h-14 flex-shrink-0">
                          {LogoComponent && <LogoComponent />}
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          {/* Rank Badge */}
                          <span className="bg-[#e6fcf5] text-green-600 text-[11px] font-bold py-1 px-2.5 rounded-full border border-green-100">
                            {college.nirfRank}
                          </span>
                          {/* Location */}
                          <div className="flex items-center gap-1 text-[13px] text-text-light">
                            <span className="text-slate-400"><PinIcon /></span>
                            <span className="truncate max-w-[130px]">{college.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* College Name */}
                      <h3 className="text-[15px] font-bold text-text-dark font-title leading-snug line-clamp-1 mt-3">
                        {college.name}
                      </h3>
                    </div>

                    {/* Searchable Course Dropdown */}
                    <div className="w-full relative">
                      <DegreeSearchDropdown 
                        placeholder="Search degree"
                        onSelect={(degree) => handleSelectDegree(college, degree)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white border border-[#CFD8DE] rounded-[8px] p-6 text-center">
              <span className="text-5xl mb-4">🎓</span>
              <h3 className="text-base font-bold text-text-dark font-title">All colleges shortlisted!</h3>
              <p className="text-[13px] text-text-light mt-1 max-w-sm">You have shortlisted all recommended colleges. Go to the Shortlists page to view them!</p>
            </div>
          )}

          {/* Explore all colleges button */}
          <div className="flex justify-center pt-6">
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2.5 px-8 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Explore all colleges
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
