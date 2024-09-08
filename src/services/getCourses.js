import { supabase } from "../supabaseClient";

export const getCourses = async () => {
  const { data, error } = await supabase.from("courses").select("*");
  return { data, error };
};

export const searchForCourses = async (searchInput) => {
  const { data, error } = await supabase
    .from("courses")
    .select()
    .ilike("coursename", `%${searchInput}%`);

  return { data, error };
};
