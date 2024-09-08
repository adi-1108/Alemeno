import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetails } from "../services/getCourseDetails";
import { supabase } from "../supabaseClient";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import CourseCard from "./CourseCard";

const CourseDetails = () => {
  const { id } = useParams();
  const courseId = id.slice(0, -1);
  const [courseDetails, setcourseDetails] = useState({});
  const fetchCourseDetails = async () => {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("courseid", courseId)
      .single();

    setcourseDetails(data);
  };
  console.log(courseDetails);
  useEffect(() => {
    fetchCourseDetails();
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col ">
      <section className="flex flex-col gap-4 bg-gradient-to-r px-6 py-8 rounded-3xl mt-4 from-blue-600 to-slate-200">
        <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
          {courseDetails?.coursename}
        </h1>
        <p className="max-w-[600px] text-white font-bold md:text-xl">
          {courseDetails?.instructorname}
        </p>
        <p className="max-w-[600px] text-slate-200 md:text-xl">
          {courseDetails?.description}
        </p>

        <div className="flex items-center justify-start gap-4">
          <button className="font-meduim rounded-xl border-2 border-slate-500/40 bg-blue-800 px-4 py-2 text-2xl text-white shadow-xl transition-all hover:scale-110">
            Enroll Now
          </button>

          <div className="flex items-center justify-start gap-2">
            <UserCircleIcon className="h-8 w-8 text-white" />
            <p className="font-bold text-white">12,345 Students enrolled</p>
          </div>
        </div>


      </section>
    </div>
  );
};

export default CourseDetails;
