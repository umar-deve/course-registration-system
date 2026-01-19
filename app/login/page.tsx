export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Student Login</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Student ID</label>
            <input
              type="text"
              placeholder="BUE/2021/001"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">New student? <a href="#" className="text-blue-600 hover:underline">Create account</a></p>
        </div>
      </div>
    </div>
  );
}
