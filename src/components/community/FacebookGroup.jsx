export default function FacebookGroup() {
    return (
      
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10 shadow-lg text-center max-w-3xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-green-200 text-green-800 p-4 rounded-full">
                <h2 className="text-3xl font-bold mb-4">📘 Join our Facebook Group</h2>
                <p className="text-gray-600 mb-4">
                Connect with the Plantopia community on Facebook.
                </p>
                <a
                href="https://facebook.com/plantopia-group"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                Go to Facebook Group
                </a>
          </div>
        </div>
    </div>
    );
  }
  