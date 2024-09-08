import React, { useState, useEffect, useRef } from "react";
import { getCourses, searchForCourses } from "../services/getCourses"; // Ensure getCourses function is correctly imported
import { supabase } from "../supabaseClient";
import CourseCard from "./CourseCard";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const inputSearch = useRef(null);
  const [input, setInput] = useState("");

  /* To search for the course using inputSearch */
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchInput = input;
    console.log(searchInput);
    if (searchInput.length >= 4) {
      const { data: d1 } = await supabase.from("courses").select("*").or()
      // 
      // console.log("COURSENAME DATA", d1);
      // console.log("instructor name DATA", d2);


    }
  };

  const fetchCourses = async () => {
    const { data, error } = await getCourses();
    if (error) {
      setError(error.message);
      return;
    }
    setCourses(data);
  };

  useEffect(() => {
    /* To fetch the course data everytime this component renders */
    fetchCourses();
  }, []);

  useEffect(() => {
    if (input.length < 4) fetchCourses();
    else handleSearch();
  }, [input]);

  if (error) return <p>Error</p>;

  //
  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex items-center justify-center gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for courses"
            className="my-4 w-full rounded-full border-2 border-slate-400/20 px-8 py-4 font-semibold text-slate-900 shadow-xl focus:outline-none"
          />
          <MagnifyingGlassCircleIcon className="h-16 w-16 rounded-full text-blue-600 hover:scale-110 hover:shadow-xl hover:ring-2" />
        </div>
      </form>
      <div className="grid grid-cols-3 gap-2">
        {courses.map((i) => (
          <CourseCard key={i.courseid} course={i} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
