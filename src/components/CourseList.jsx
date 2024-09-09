import React, { useState, useEffect } from "react";
import { getCourses } from "../services/getCourses"; // Ensure getCourses function is correctly imported
import CourseCard from "./CourseCard";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";
import { Input } from "./ui/input";
const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  const fetchCourses = async () => {
    const { data, error } = await getCourses();
    if (error) {
      setError(error.message);
      return;
    }
    setCourses(data);
    setFilteredCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    if (searchTerm.length > 3) {
      const filtered = courses.filter((course) => {
        return (
          course.coursename.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructorname.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }
  };

  useEffect(() => {
    if (searchTerm.length <= 3) {
      setFilteredCourses(courses);
    }
  }, [searchTerm, courses]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="px-16">
      <form onSubmit={handleSearch}>
        <div className="flex items-center justify-center gap-4">
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for courses"
            className="my-4 w-full rounded-full border-2 border-slate-400/20 px-8 py-6 text-lg font-semibold text-slate-900 shadow-xl focus:outline-none bg-white"
          />
          <button type="submit">
            <MagnifyingGlassCircleIcon className="h-16 w-16 rounded-full text-blue-600 bg-white hover:scale-110 hover:shadow-xl hover:ring-2" />
          </button>
        </div>
      </form>
      <div className="grid grid-cols-3 gap-2 px-16 py-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.courseid} course={course} />
          ))
        ) : (
          <p>No result found</p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
