import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bells University Course Registration',
  description: 'Frontend Software Development Project',
};

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center space-x-2" style={{ textDecoration: 'none' }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#2563eb',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontWeight: 'bold' }}>BU</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Bells University</h1>
              <p className="text-sm text-gray-600">Course Registration</p>
            </div>
          </a>

          <div className="flex items-center space-x-6">
            <a href="/" className="text-gray-700 font-medium hover:text-blue-600">Dashboard</a>
            <a href="/courses" className="text-gray-700 font-medium hover:text-blue-600">Courses</a>
            <a href="/registration" className="text-gray-700 font-medium hover:text-blue-600">Registration</a>
            <a href="/schedule" className="text-gray-700 font-medium hover:text-blue-600">Schedule</a>
            <a href="/login" className="btn btn-primary">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="container py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container text-center">
            <p>Bells University of Technology • ICT 235 Project</p>
            <p className="text-gray-400 mt-2">Frontend Software Development • © 2025</p>
          </div>
        </footer>
      </body>
    </html>
  );
}