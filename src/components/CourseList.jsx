import React, { useState, useEffect } from "react";
import { getCourses } from "../services/getCourses"; // Ensure getCourses function is correctly imported
import { supabase } from "../supabaseClient";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await getCourses();
      if (error) {
        setError(error.message);
        return;
      }
      setCourses(data);
    };
    fetchCourses();
  }, []);
  console.log(courses);

  if (error) return <p>Error</p>;

  //
  return (
    <div>
      <h1>Course List</h1>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((i) => (
          <CourseCard key={i.courseid} course={i} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
