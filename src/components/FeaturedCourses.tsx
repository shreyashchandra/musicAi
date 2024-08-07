"use client";

import Link from "next/link";
import courseData from "../data/music_courses.json";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

interface CourseDataType {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (courses: CourseDataType) => courses.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center ">
        <h2 className="text-teal-400 text-2xl font-semibold leading-10">
          Featured Courses
        </h2>
        <p className="text-gray-300 text-4xl">Learn from the best</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center py-7 sm:mx-10">
        {featuredCourses.map((course: CourseDataType) => (
          <div key={course.id} className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm p-4 items-center">
              <h2 className="text-xl font-semibold mt-3">{course.title}</h2>
              <p className="text-sm mt-4 text-gray-400 h-16">
                {course.description}
              </p>
              <Link href={`/courses/${course.slug}`} className="mt-5">
                <button className="h-12 w-32 bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 rounded-lg hover:scale-105 transition-transform duration-500">
                  Enroll &gt;
                </button>
              </Link>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link href="/courses">
          <Button
            borderRadius="1.75rem"
            className=" bg-white dark:bg-slate-950 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View all courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
