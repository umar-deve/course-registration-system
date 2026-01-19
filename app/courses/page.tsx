export default function CoursesPage() {
  const courses = [
    { code: 'CSC 101', title: 'Introduction to Computer Science', credits: 3, seats: 45, instructor: 'Dr. Adebayo' },
    { code: 'MAT 201', title: 'Calculus II', credits: 4, seats: 32, instructor: 'Prof. Nwosu' },
    { code: 'PHY 102', title: 'Physics for Engineers', credits: 3, seats: 28, instructor: 'Dr. Bello' },
    { code: 'ENG 101', title: 'English Composition', credits: 2, seats: 50, instructor: 'Mrs. Ali' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Courses</h1>
      
      {/* Search and Filters */}
      <div className="card mb-6">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <input
            type="text"
            placeholder="Search courses..."
            style={{
              flexGrow: 1,
              padding: '12px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              minWidth: '300px'
            }}
          />
          <select style={{
            padding: '12px 40px 12px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            backgroundColor: 'white'
          }}>
            <option>All Departments</option>
            <option>Computer Science</option>
            <option>Mathematics</option>
            <option>Physics</option>
          </select>
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#2563eb' }}>{course.code}</span>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginTop: '4px' }}>
                  {course.title}
                </h3>
              </div>
              <span style={{
                backgroundColor: '#dbeafe',
                color: '#1d4ed8',
                fontSize: '14px',
                padding: '4px 12px',
                borderRadius: '9999px'
              }}>
                {course.credits} credits
              </span>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', color: '#4b5563', marginBottom: '8px' }}>
                <span style={{ marginRight: '8px' }}>👨‍🏫</span>
                <span>{course.instructor}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#4b5563' }}>
                <span style={{ marginRight: '8px' }}>👥</span>
                <span>{course.seats} seats available</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn btn-primary" style={{ flex: 1 }}>
                Register
              </button>
              <button style={{
                padding: '8px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                backgroundColor: 'white',
                color: '#374151',
                cursor: 'pointer'
              }}>
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}