export default function HomePage() {
  return (
    <div>
      {/* Welcome Banner */}
      <div className="gradient-blue text-white rounded-2xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to Course Registration System</h1>
        <p style={{ color: '#bfdbfe' }}>Manage your academic journey at Bells University</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Registered Courses", value: "5", icon: "📚" },
          { title: "Available Credits", value: "18/24", icon: "🎓" },
          { title: "Current GPA", value: "4.2", icon: "⭐" },
          { title: "Next Payment", value: "₦150,000", icon: "💰" },
        ].map((stat, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 className="text-gray-600 font-medium">{stat.title}</h3>
              <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
            </div>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button style={{
            padding: '1rem',
            backgroundColor: '#dbeafe',
            color: '#1d4ed8',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            📝 Register Courses
          </button>
          <button style={{
            padding: '1rem',
            backgroundColor: '#dcfce7',
            color: '#166534',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            📅 View Schedule
          </button>
          <button style={{
            padding: '1rem',
            backgroundColor: '#f3e8ff',
            color: '#6b21a8',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            📊 Check Grades
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { action: 'Registered for "Web Development"', time: '2 hours ago', status: 'completed' },
            { action: 'Payment for semester fees', time: '1 day ago', status: 'pending' },
            { action: 'Updated personal information', time: '3 days ago', status: 'completed' },
          ].map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem'
            }}>
              <div>
                <h3 style={{ fontWeight: '500' }}>{item.action}</h3>
                <p className="text-gray-600 text-sm">{item.time}</p>
              </div>
              <span style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                backgroundColor: item.status === 'completed' ? '#dcfce7' : '#fef3c7',
                color: item.status === 'completed' ? '#166534' : '#92400e'
              }}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}