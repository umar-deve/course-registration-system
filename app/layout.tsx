import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bells University Course Registration',
  description: 'Frontend Software Development Project',
};

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
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

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="desktop-nav items-center space-x-6">
            <a href="/" className="text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-50">
              Dashboard
            </a>
            <a href="/courses" className="text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-50">
              Courses
            </a>
            <a href="/registration" className="text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-50">
              Registration
            </a>
            <a href="/schedule" className="text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-50">
              Schedule
            </a>
            <a href="/login" className="btn btn-primary px-6">
              Login
            </a>
          </div>

          {/* Mobile Menu Button - Hidden on desktop */}
          <button className="mobile-menu-button p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
            <span style={{ fontSize: '1.5rem' }}>☰</span>
          </button>
        </div>

        {/* Mobile Navigation Menu - Hidden by default */}
        <div id="mobileMenu" className="hidden mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-col space-y-3">
            <a href="/" className="p-3 bg-white rounded-lg hover:bg-gray-100 font-medium">
              📊 Dashboard
            </a>
            <a href="/courses" className="p-3 bg-white rounded-lg hover:bg-gray-100 font-medium">
              📚 Courses
            </a>
            <a href="/registration" className="p-3 bg-white rounded-lg hover:bg-gray-100 font-medium">
              📝 Registration
            </a>
            <a href="/schedule" className="p-3 bg-white rounded-lg hover:bg-gray-100 font-medium">
              📅 Schedule
            </a>
            <a href="/login" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-center">
              👤 Login
            </a>
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
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const menuButton = document.querySelector('.mobile-menu-button');
              const mobileMenu = document.getElementById('mobileMenu');
              
              if (menuButton && mobileMenu) {
                menuButton.addEventListener('click', function() {
                  mobileMenu.classList.toggle('hidden');
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function(event) {
                  if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
                    mobileMenu.classList.add('hidden');
                  }
                });
              }
              
              // Add loading animation
              document.body.classList.add('fade-in');
              
              // Make all buttons more responsive
              document.querySelectorAll('a, button').forEach(el => {
                el.addEventListener('touchstart', function() {
                  this.style.opacity = '0.8';
                });
                el.addEventListener('touchend', function() {
                  this.style.opacity = '1';
                });
              });
            });
          `
        }} />
      </head>
      <body className="bg-gray-50">
        <Navbar />
        <main className="container py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container text-center">
            <p className="text-lg">Bells University of Technology • ICT 235 Project</p>
            <p className="text-gray-400 mt-2">Frontend Software Development • © 2025</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="/" className="text-gray-400 hover:text-white">Home</a>
              <a href="/courses" className="text-gray-400 hover:text-white">Courses</a>
              <a href="/registration" className="text-gray-400 hover:text-white">Registration</a>
              <a href="/schedule" className="text-gray-400 hover:text-white">Schedule</a>
              <a href="/login" className="text-gray-400 hover:text-white">Login</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
