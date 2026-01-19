export default function SchedulePage() {
  const schedule = [
    { day: 'Monday', time: '9:00 AM - 10:30 AM', course: 'CSC 101 - Intro to CS', room: 'Room 101', building: 'Science Block' },
    { day: 'Monday', time: '2:00 PM - 3:30 PM', course: 'MAT 201 - Calculus II', room: 'Room 205', building: 'Math Building' },
    { day: 'Tuesday', time: '10:00 AM - 11:30 AM', course: 'PHY 102 - Physics', room: 'Lab 3', building: 'Physics Lab' },
    { day: 'Wednesday', time: '9:00 AM - 10:30 AM', course: 'ENG 101 - English', room: 'Room 102', building: 'Arts Block' },
    { day: 'Thursday', time: '1:00 PM - 2:30 PM', course: 'CSC 101 - Intro to CS', room: 'Room 101', building: 'Science Block' },
    { day: 'Friday', time: '11:00 AM - 12:30 PM', course: 'MAT 201 - Calculus II', room: 'Room 205', building: 'Math Building' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Class Schedule</h1>
      
      {/* Schedule Header */}
      <div className="card mb-6">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 className="text-2xl font-bold text-gray-800">Weekly Schedule</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <select className="btn" style={{ padding: '8px 16px', border: '1px solid #d1d5db' }}>
              <option>Week 1 (Feb 3-7)</option>
              <option>Week 2 (Feb 10-14)</option>
              <option>Week 3 (Feb 17-21)</option>
            </select>
            <button className="btn btn-primary">Download PDF</button>
          </div>
        </div>

        {/* Schedule Table */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {schedule.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: 'white'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ width: '80px', textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '18px' }}>
                    {item.day.slice(0, 3)}
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>
                    {item.time}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '18px' }}>
                    {item.course}
                  </h3>
                  <p style={{ color: '#6b7280' }}>
                    {item.room} • {item.building}
                  </p>
                </div>
              </div>
              <button style={{
                padding: '8px 16px',
                backgroundColor: '#dbeafe',
                color: '#2563eb',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500'
              }}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Classes & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Classes */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Classes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{
              padding: '12px',
              backgroundColor: '#dbeafe',
              borderRadius: '8px',
              borderLeft: '4px solid #2563eb'
            }}>
              <p style={{ fontWeight: '500' }}>CSC 101 - Introduction to Computer Science</p>
              <p className="text-gray-600 text-sm">Tomorrow • 9:00 AM • Room 101</p>
            </div>
            
            <div style={{
              padding: '12px',
              backgroundColor: '#dcfce7',
              borderRadius: '8px',
              borderLeft: '4px solid #16a34a'
            }}>
              <p style={{ fontWeight: '500' }}>MAT 201 - Calculus II</p>
              <p className="text-gray-600 text-sm">Monday • 2:00 PM • Room 205</p>
            </div>
            
            <div style={{
              padding: '12px',
              backgroundColor: '#fef3c7',
              borderRadius: '8px',
              borderLeft: '4px solid #ca8a04'
            }}>
              <p style={{ fontWeight: '500' }}>PHY 102 - Physics for Engineers</p>
              <p className="text-gray-600 text-sm">Tuesday • 10:00 AM • Lab 3</p>
            </div>
          </div>
        </div>

        {/* Schedule Stats */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Schedule Statistics</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p className="text-gray-600">Total Class Hours per Week</p>
              <p className="text-3xl font-bold">12 hours</p>
              <div style={{
                height: '8px',
                backgroundColor: '#e5e7eb',
                borderRadius: '9999px',
                marginTop: '8px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  width: '60%',
                  backgroundColor: '#2563eb',
                  borderRadius: '9999px'
                }}></div>
              </div>
            </div>
            
            <div>
              <p className="text-gray-600">Days with Classes</p>
              <p className="text-3xl font-bold">5 days</p>
            </div>
            
            <div>
              <p className="text-gray-600">Average Classes per Day</p>
              <p className="text-3xl font-bold">1.2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar View */}
      <div className="card mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Calendar View</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '8px',
          textAlign: 'center'
        }}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} style={{
              padding: '12px',
              backgroundColor: '#f9fafb',
              fontWeight: '600',
              color: '#374151'
            }}>
              {day}
            </div>
          ))}
          
          {Array.from({ length: 28 }, (_, i) => i + 1).map(day => (
            <div key={day} style={{
              padding: '12px',
              backgroundColor: day === 5 || day === 6 || day === 12 ? '#dbeafe' : 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              position: 'relative'
            }}>
              {day}
              {(day === 5 || day === 6 || day === 12) && (
                <div style={{
                  position: 'absolute',
                  bottom: '4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#2563eb',
                  borderRadius: '50%'
                }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}