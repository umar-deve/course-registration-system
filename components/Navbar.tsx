import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">BU</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Bells University</h1>
              <p className="text-sm text-gray-600">Course Registration</p>
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium">
              Courses
            </Link>
            <Link href="/registration" className="text-gray-700 hover:text-blue-600 font-medium">
              Registration
            </Link>
            <Link href="/schedule" className="text-gray-700 hover:text-blue-600 font-medium">
              Schedule
            </Link>
            <Link href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
