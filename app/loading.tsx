export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ranch-600"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}