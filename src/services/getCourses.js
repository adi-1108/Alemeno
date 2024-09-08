import { supabase } from "../supabaseClient";

export const getCourses = async () => {
  const { data, error } = await supabase.from("courses").select("*");
  return { data, error };
};

export const searchForCourses = async (searchInput, columnToSearch) => {
  const { data, error } = await supabase
    .from("courses")
    .select()
    .ilike(`${columnToSearch}`, `%${searchInput}%`);

  return { data, error };
};


