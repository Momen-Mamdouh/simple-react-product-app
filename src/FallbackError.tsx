export default function FallbackError({ error }: { error: Error }) {
  return (
    <div className="text-center p-10">
      <h1 className="text-red-600 text-2xl">Something went wrong.</h1>
      <p className="text-gray-700 mt-2">{error.message}</p>
    </div>
  )
}
