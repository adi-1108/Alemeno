import { supabase } from "../supabaseClient";

export const getCourseDetails = async (courseId) => {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("courseid", courseId)
    .single();

  if (error) {
    console.error("Error fetching course details:", error);
    return { data: null, error };
  }

  return { data, error: null };
};
