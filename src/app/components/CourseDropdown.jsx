"use client";

import React, { useState, useEffect, useRef } from "react";

const COLLEGE_COURSES = {
  "college-1": [
    {
      name: "Online BBA",
      specializations: ["Online BBA in General Management", "Online BBA in Human Resource", "Online BBA in Marketing"]
    },
    {
      name: "Online MBA",
      specializations: ["Online MBA in Finance", "Online MBA in Human Resource", "Online MBA in General Management"]
    }
  ],
  "college-2": [
    {
      name: "Online MBA",
      specializations: ["Online MBA in Finance", "Online MBA in Marketing", "Online MBA in Data Analytics"]
    },
    {
      name: "Online MCA",
      specializations: ["Online MCA in Cloud Computing", "Online MCA in Cyber Security", "Online MCA in Artificial Intelligence"]
    }
  ],
  "college-3": [
    {
      name: "Online MBA",
      specializations: ["Online MBA in Marketing", "Online MBA in Financial Management", "Online MBA in Operations"]
    },
    {
      name: "Online BBA",
      specializations: ["Online BBA in Banking", "Online BBA in Insurance", "Online BBA in General"]
    }
  ],
  "college-4": [
    {
      name: "Online MBA",
      specializations: ["Online MBA in Marketing", "Online MBA in Finance", "Online MBA in Data Science"]
    },
    {
      name: "Online BCA",
      specializations: ["Online BCA in Software Engineering", "Online BCA in Web Development", "Online BCA in Mobile App"]
    }
  ],
  "college-5": [
    {
      name: "Online MBA",
      specializations: ["Online MBA in Marketing", "Online MBA in Human Resource", "Online MBA in Finance"]
    },
    {
      name: "Online B.Com",
      specializations: ["Online B.Com in Banking", "Online B.Com in Taxation", "Online B.Com in Accounting"]
    }
  ]
};

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function CourseDropdown({ collegeId, value = "", onSelect, placeholder = "Search degree" }) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const containerRef = useRef(null);

  // Sync internal state with prop changes
  useEffect(() => {
    setQuery(value);
  }, [value]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const courses = COLLEGE_COURSES[collegeId] || COLLEGE_COURSES["college-2"];

  // Filter logic: Course is kept if its name OR any specialization contains query text
  const filteredCourses = courses.filter((course) => {
    const courseMatches = course.name.toLowerCase().includes(query.toLowerCase());
    const specsMatch = course.specializations.some((spec) =>
      spec.toLowerCase().includes(query.toLowerCase())
    );
    return courseMatches || specsMatch;
  });

  const handleSelectSpecialization = (spec) => {
    setQuery(spec);
    setIsOpen(false);
    if (onSelect) {
      onSelect(spec);
    }
  };

  const handleCourseClick = (courseName) => {
    setExpandedCourse((prev) => (prev === courseName ? null : courseName));
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Input Field trigger */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full h-8 border border-[#CFD8DE] rounded-lg py-2 pl-3 pr-8 bg-white text-[13px] text-text-dark font-medium placeholder-slate-400 outline-none focus:border-primary transition-colors cursor-pointer"
        />
        <div className="absolute right-3 pointer-events-none">
          <ChevronDownIcon />
        </div>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 max-h-56 overflow-y-auto bg-white border border-[#CFD8DE] rounded-lg shadow-lg z-50 no-scrollbar">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => {
              const isExpanded = expandedCourse === course.name;
              
              // Filter specializations under this course to match search text
              const filteredSpecs = course.specializations.filter(
                (spec) =>
                  spec.toLowerCase().includes(query.toLowerCase()) ||
                  course.name.toLowerCase().includes(query.toLowerCase())
              );

              return (
                <div key={course.name} className="flex flex-col border-b border-slate-50 last:border-b-0">
                  {/* Collapsible Course Header Row */}
                  <div
                    onClick={() => handleCourseClick(course.name)}
                    className="flex items-center justify-between py-2 px-3 hover:bg-slate-50 cursor-pointer text-[13px] text-text-dark font-semibold transition-colors"
                  >
                    <span>{course.name}</span>
                    <span className={`transform transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
                      <ChevronDownIcon />
                    </span>
                  </div>

                  {/* Expanded Specializations Nested Underneath */}
                  {isExpanded && (
                    <div className="bg-slate-50 pl-5 pr-3 py-1 flex flex-col gap-1 border-t border-slate-100">
                      {filteredSpecs.length > 0 ? (
                        filteredSpecs.map((spec) => (
                          <div
                            key={spec}
                            onClick={() => handleSelectSpecialization(spec)}
                            className="py-1.5 px-2 hover:bg-slate-100 rounded cursor-pointer text-[12px] text-text-body font-medium transition-colors"
                          >
                            {spec}
                          </div>
                        ))
                      ) : (
                        <div className="py-1.5 px-2 text-[12px] text-text-light italic">
                          No matching specializations
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="py-3 px-3 text-[13px] text-text-light italic text-center">
              No matching courses
            </div>
          )}
        </div>
      )}
    </div>
  );
}
