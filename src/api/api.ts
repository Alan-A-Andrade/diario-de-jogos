import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  import.meta.env.VITE_API_URL,
  import.meta.env.VITE_SECRET_KEY
);

const fetch = async () => {
  const { data: games, error } = await supabase.from("games").select("*");

  return { games, error };
};

export { fetch };
