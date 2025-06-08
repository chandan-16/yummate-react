import { useRouteError } from "react-router-dom"

const Error = () => {

  const err = useRouteError();
  console.log(err)

  return (
    <div className="flex items-center justify-center h-screen px-4 bg-gray-100 text-center">
      <div className="max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! 😵</h1>
        <p className="text-xl text-gray-700 mb-2">Something went wrong.</p>
        <p className="text-md text-gray-500 mb-2">Status: <span className="font-semibold">{err.status}</span></p>
        <p className="text-md text-gray-500">Message: <span className="font-semibold">{err.statusText || "Unexpected Error"}</span></p>
        <a href="/" className="inline-block mt-6 px-5 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 transition duration-200">
          Go to Home
        </a>
      </div>
    </div>
  )
}

export default Error