import { supabase } from "@/lib/supabase";
import HeroTile from "@/components/HeroTile";
import Sidebar from "@/components/Sidebar";
import CourseCard from "@/components/Coursecard";
import ActivityTile from "@/components/ActivityTile";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
        <h2 className="text-red-400 font-semibold">
          Failed to load courses
        </h2>
        <p className="text-zinc-400 text-sm mt-2">
          Please try again later.
        </p>
      </div>
    </main>
  );
}

  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="grid gap-6 md:grid-cols-3">

          <div className="md:col-span-2">
           <HeroTile
  activeCourses={courses?.length || 0}
  hoursLearned={32}
  certificates={3}
/>
          </div>

          <ActivityTile />

          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>
      </main>
    </div>
  );
}


