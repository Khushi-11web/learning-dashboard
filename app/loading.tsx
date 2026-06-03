export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="grid grid-cols-12 gap-4">

        {/* Hero Skeleton */}
        <div className="col-span-12 md:col-span-6 h-40 rounded-3xl bg-zinc-900 animate-pulse" />

        {/* Activity Skeleton */}
        <div className="col-span-12 md:col-span-6 h-40 rounded-3xl bg-zinc-900 animate-pulse" />

        {/* Course Cards Skeleton */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="col-span-12 md:col-span-6 lg:col-span-4 h-52 rounded-3xl bg-zinc-900 animate-pulse"
          >
            <div className="p-6 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-800" />

              <div className="h-5 w-3/4 rounded bg-zinc-800" />

              <div className="h-3 w-1/2 rounded bg-zinc-800" />

              <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full w-1/3 bg-zinc-700 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
