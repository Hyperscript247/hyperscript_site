"use client";

import React, { useRef, useEffect, useState } from "react";
import { courses } from "./CourseData";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { Fade } from "react-awesome-reveal";

const CoursesShowcase = ({ theme }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isUserInteracting = useRef(false); // Tracks if the user is interacting
  const interactionTimeout = useRef(null); // Timeout for resuming auto-scroll

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const duplicateCourses = () => {
      // Duplicate content to create an infinite loop effect
      if (carousel.children.length < 2) {
        carousel.innerHTML += carousel.innerHTML;
      }
    };

    duplicateCourses();

    // Auto-scroll effect
    const scrollInterval = setInterval(() => {
      if (carousel) {
        carousel.scrollBy({ left: 3, behavior: "smooth" });

        // Looping the carousel after reaching the halfway point
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollTo({ left: 0, behavior: "instant" });
        }
      }
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  // Handles mouse wheel for horizontal scrolling
  const handleWheelScroll = (e: React.WheelEvent) => {
    if (carouselRef.current) {
      // Only prevent default if scrolling horizontally (left or right)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        carouselRef.current.scrollLeft += e.deltaX * 1; // Smooth horizontal scrolling
      }
    }
  };

  // Detect user interaction but don't stop auto-scrolling
  const handleUserInteraction = () => {
    isUserInteracting.current = true;

    // Clear any existing timeout
    if (interactionTimeout.current) clearTimeout(interactionTimeout.current);

    // Resume auto-scroll after a 2-second delay
    interactionTimeout.current = setTimeout(() => {
      isUserInteracting.current = false;
    }, 2000);
  };

  return (
    <div
      className="course-section relative mt-20 overflow-hidden"
      data-theme={theme}
    >
      {/* Section Title */}
      <Fade direction="up">
        <SectionTitle
          title="Explore Our Courses"
          paragraph="Develop your skills with our expert-led programs, designed to help you excel in today's competitive world."
          center
        />
      </Fade>

      {/* Scrollable Course Container */}
      <div
        className="carousel-container scrollbar-hide relative overflow-x-auto whitespace-nowrap px-4"
        ref={carouselRef}
        onWheel={handleWheelScroll}
        onMouseMove={handleUserInteraction}
        onMouseDown={handleUserInteraction}
        onTouchStart={handleUserInteraction}
      >
        <div className="flex space-x-8">
          {courses.concat(courses).map((course, index) => (
            <Link key={index} href={`/course/${course.id}`} className="group">
              <div className="mb-4 mt-4 w-[calc(33.33%-1rem)] transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105 dark:bg-gray-900 sm:w-[calc(100%-2rem)]">
                {/* Course Image */}
                <Image
                  src={course.image}
                  alt={course.name}
                  width={450}
                  height={300}
                  className="h-48 w-full object-cover" // Fix height for uniformity
                />

                {/* Course Details */}
                <div className="flex h-full flex-col p-4">
                  {/* Course Title */}
                  <h3 className="mb-2 truncate text-xl font-semibold text-gray-800 dark:text-white">
                    {course.name}
                  </h3>

                  {/* Course Description */}
                  <p className="mb-3 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    {course.description}
                  </p>

                  {/* Instructor */}
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Instructor: {course.instructor}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Custom Styling to Hide Scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CoursesShowcase;
