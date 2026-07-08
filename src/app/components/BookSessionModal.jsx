"use client";

import React, { useState } from "react";

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" className="flex-shrink-0">
      <path d="M6.66667 0L8.72667 4.17333L13.3333 4.84667L10 8.09333L10.7867 12.68L6.66667 10.5133L2.54667 12.68L3.33333 8.09333L0 4.84667L4.60667 4.17333L6.66667 0Z" fill="#EAB308"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0">
      <path d="M7.53145 0C3.41468 0 0.0643548 3.22694 0.0629032 7.19274C0.0619355 8.46097 0.406452 9.69871 1.05968 10.7889L0 14.5161L3.95952 13.516C5.06091 14.0921 6.28557 14.3926 7.52855 14.3918H7.53145C11.6482 14.3918 14.9985 11.1644 15 7.19855C15.001 5.27758 14.2248 3.46935 12.8144 2.11016C11.4044 0.750484 9.52935 0.000483871 7.53145 0ZM7.53145 13.1768H7.52903C6.41516 13.1768 5.32258 12.8884 4.36935 12.3435L4.14194 12.2139L1.79323 12.8071L2.42032 10.6006L2.27274 10.3747C1.65286 9.42926 1.32287 8.32326 1.32339 7.19274C1.32484 3.89613 4.11 1.215 7.53387 1.215C9.19161 1.21548 10.7502 1.83823 11.9226 2.96806C13.095 4.0979 13.74 5.60032 13.739 7.19806C13.7376 10.4947 10.9529 13.1768 7.53097 13.1768H7.53145ZM10.9365 8.69855C10.7497 8.60903 9.83226 8.17403 9.66097 8.11355C9.49016 8.05403 9.36581 8.02306 9.24145 8.20306C9.11758 8.38306 8.75952 8.78806 8.65113 8.90758C8.54177 9.02758 8.4329 9.0421 8.24613 8.95258C8.05935 8.86258 7.4579 8.6729 6.74564 8.06032C6.19064 7.58419 5.81613 6.99581 5.70726 6.81532C5.59839 6.63581 5.69564 6.53855 5.78903 6.44903C5.87274 6.36919 5.97581 6.23952 6.06871 6.13452C6.16161 6.02952 6.19258 5.95452 6.25548 5.83452C6.31742 5.715 6.28645 5.60952 6.23952 5.52C6.19258 5.42952 5.82 4.545 5.66371 4.18548C5.51274 3.83516 5.35887 3.8821 5.24419 3.87629C5.13532 3.87145 5.01145 3.87 4.88613 3.87C4.76274 3.87 4.56 3.915 4.38871 4.095C4.2179 4.275 3.73548 4.70952 3.73548 5.59403C3.73548 6.47903 4.40419 7.33355 4.49758 7.45355C4.59097 7.57306 5.81371 9.38903 7.68581 10.1681C8.13097 10.3524 8.47839 10.4632 8.74984 10.5465C9.19693 10.6834 9.60387 10.6635 9.92516 10.6176C10.2832 10.5658 11.0294 10.1831 11.1842 9.76355C11.34 9.34403 11.34 8.98403 11.2935 8.90903C11.2481 8.83403 11.1232 8.78903 10.9365 8.69855V8.69855Z" fill="#007B2D"/>
    </svg>
  );
}

function CallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
      <path d="M11.3167 3.33643C12.6798 3.48005 13.953 4.08461 14.9258 5.05012C15.8986 6.01562 16.5127 7.28425 16.6666 8.64619M11.3167 6.01137C11.9744 6.14106 12.5779 6.46546 13.049 6.94246C13.52 7.41945 13.8368 8.02703 13.9582 8.68631M16.6332 13.314V15.3202C16.6339 15.5065 16.5958 15.6908 16.5211 15.8615C16.4465 16.0321 16.3371 16.1853 16.1999 16.3112C16.0626 16.4371 15.9006 16.533 15.7242 16.5926C15.5477 16.6523 15.3608 16.6745 15.1753 16.6577C13.1175 16.4341 11.1408 15.7309 9.40412 14.6047C7.78833 13.578 6.41843 12.2081 5.3917 10.5923C4.26152 8.84768 3.55819 6.86139 3.33868 4.79434C3.32197 4.60941 3.34395 4.42303 3.40321 4.24706C3.46248 4.07109 3.55774 3.90939 3.68292 3.77225C3.80811 3.63512 3.96047 3.52555 4.13032 3.45052C4.30017 3.3755 4.48378 3.33667 4.66946 3.33649H6.67567C7.00021 3.3333 7.31485 3.44822 7.56092 3.65985C7.80699 3.87147 7.96772 4.16535 8.01314 4.48672C8.09782 5.12875 8.25486 5.75914 8.48126 6.36586C8.57123 6.60522 8.59071 6.86535 8.53737 7.11544C8.48404 7.36552 8.36013 7.59508 8.18033 7.7769L7.33103 8.62619C8.28302 10.3004 9.66924 11.6866 11.3435 12.6386L12.1927 11.7893C12.3746 11.6095 12.6041 11.4856 12.8542 11.4323C13.1043 11.3789 13.3644 11.3984 13.6038 11.4884C14.2105 11.7148 14.8409 11.8718 15.4829 11.9565C15.8078 12.0023 16.1045 12.166 16.3165 12.4163C16.5286 12.6666 16.6413 12.9861 16.6332 13.314Z" stroke="#199FD9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const DATE_TABS = [
  { id: "today", label: "Today", slotsText: "3 Slots Available" },
  { id: "tomorrow", label: "Tomorrow", slotsText: "19 Slots Available" },
  { id: "mar-28", label: "28 March", slotsText: "19 Slots Available" },
  { id: "mar-29", label: "29 March", slotsText: "19 Slots Available" },
  { id: "mar-30", label: "30 March", slotsText: "19 Slots Available" },
];

const TIME_SLOTS = [
  "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM",
  "1:30 PM - 2:00 PM", "2:00 PM - 2:30 PM", "2:30 PM - 3:00 PM", "3:00 PM - 3:30 PM",
  "3:30 PM - 4:00 PM", "4:30 PM - 5:00 PM", "5:00 PM - 5:30 PM", "5:30 PM - 6:00 PM",
  "6:00 PM - 6:30 PM", "6:30 PM - 7:00 PM", "7:00 PM - 7:30 PM"
];

export default function BookSessionModal({ isOpen, onClose, counselor, onBookingSuccess }) {
  const [selectedDateId, setSelectedDateId] = useState("today");
  const [selectedSlot, setSelectedSlot] = useState(null);

  if (!isOpen || !counselor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      {/* 1. Modal Container */}
      <div className="flex flex-col items-start gap-5 p-5 bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center w-full border-b pb-3">
          <h2 className="text-xl font-bold text-text-dark">
            Book a free session with {counselor.name} :
          </h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors flex items-center justify-center"
            aria-label="Close modal"
          >
            <XIcon />
          </button>
        </div>

        {/* Modal Body columns */}
        <div className="flex gap-6 w-full">
          
          {/* 2. Left column — counselor info card */}
          <div className="flex flex-col items-center gap-5 p-3 rounded-lg bg-[#EBF3F7] w-[220px] shrink-0">
            <img 
              src={counselor.imageUrl} 
              alt={counselor.name} 
              className="w-20 h-20 rounded-full object-cover border border-white shadow-sm" 
            />
            <div className="text-center">
              <p className="font-bold text-text-dark text-base">{counselor.name}</p>
              <p className="text-gray-500 text-sm mt-0.5">
                {counselor.experienceText.replace(" years", "").replace("+", "")} Years+ Experience
              </p>
            </div>
            
            {/* 5-star rating row */}
            <div className="flex items-center gap-0.5">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>

            {/* Side-by-side buttons (Whatsapp / Call Now) */}
            <div className="flex gap-2 w-full">
              <a 
                href="https://wa.me/919306508369"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex justify-center items-center gap-1 border border-green-600 text-green-700 bg-[#E6F6ED] hover:bg-[#D4EFE0] rounded-full text-xs font-semibold py-1.5 transition-colors text-center"
              >
                <WhatsappIcon />
                Whatsapp
              </a>
              <a 
                href="tel:9306508369"
                className="flex-1 flex justify-center items-center gap-1 border border-[#199FD9] text-[#199FD9] bg-[#EBF8FD] hover:bg-[#D4F1FB] rounded-full text-xs font-semibold py-1.5 transition-colors text-center"
              >
                <CallIcon />
                Call Now
              </a>
            </div>
          </div>

          {/* Right: date tabs + time slots — no scroll, full width */}
          <div className="flex-1 min-w-0">
            {/* 3. Date tabs (per-tab sizing, flex justify-between, no arrows) */}
            <div className="flex justify-between border-b pb-2">
              {DATE_TABS.map((tab) => {
                const isActive = tab.id === selectedDateId;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedDateId(tab.id);
                      setSelectedSlot(null); // Reset selected slot on date switch
                    }}
                    className={`flex flex-col items-center px-3 py-2 border-b-2 transition-all ${
                      isActive 
                        ? "border-sky-600 text-text-dark font-bold" 
                        : "border-transparent text-gray-500 hover:text-sky-600"
                    }`}
                  >
                    <span className={isActive ? "font-bold text-sm" : "text-sm text-gray-500"}>
                      {tab.label}
                    </span>
                    <span className="text-green-600 text-xs mt-0.5">
                      {tab.slotsText}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Time slot section */}
            <div>
              <p className="font-semibold text-text-dark mt-4 mb-2">Choose a Time slot :</p>
              
              {/* 4. Time slot buttons grid */}
              <div className="grid grid-cols-4 gap-3">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = slot === selectedSlot;
                  return (
                    <button
                      key={slot}
                      onClick={() => {
                        setSelectedSlot(slot);
                        const dateLabel = DATE_TABS.find(t => t.id === selectedDateId)?.label || "Today";
                        onBookingSuccess(counselor.name, dateLabel, slot);
                      }}
                      className={`rounded border border-[#199FD9] text-sm py-2 transition-all text-center ${
                        isSelected 
                          ? "bg-sky-50 font-semibold text-[#199FD9]" 
                          : "bg-white text-[#199FD9] hover:bg-sky-50/50"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
