export default function RegistrationPage() {
  const registeredCourses = [
    { code: 'CSC 101', title: 'Introduction to Computer Science', credits: 3, status: 'Confirmed' },
    { code: 'MAT 201', title: 'Calculus II', credits: 4, status: 'Pending' },
    { code: 'ENG 101', title: 'English Composition', credits: 2, status: 'Confirmed' },
    { code: 'PHY 102', title: 'Physics for Engineers', credits: 3, status: 'Pending' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Course Registration</h1>
      
      {/* Registration Summary */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div style={{
            padding: '16px',
            backgroundColor: '#dbeafe',
            borderRadius: '8px'
          }}>
            <p className="text-gray-600">Total Credits</p>
            <p className="text-3xl font-bold">12</p>
          </div>
          
          <div style={{
            padding: '16px',
            backgroundColor: '#dcfce7',
            borderRadius: '8px'
          }}>
            <p className="text-gray-600">Registered Courses</p>
            <p className="text-3xl font-bold">4</p>
          </div>
          
          <div style={{
            padding: '16px',
            backgroundColor: '#fef3c7',
            borderRadius: '8px'
          }}>
            <p className="text-gray-600">Remaining Credits</p>
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-gray-600 mt-1">Max: 24 credits</p>
          </div>
        </div>
      </div>

      {/* Your Registered Courses */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Registered Courses</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          {registeredCourses.map((course, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}>
              <div>
                <h3 style={{ fontWeight: '600', color: '#1f2937' }}>
                  {course.code} - {course.title}
                </h3>
                <p className="text-gray-600 text-sm">{course.credits} credits</p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  backgroundColor: course.status === 'Confirmed' ? '#dcfce7' : '#fef3c7',
                  color: course.status === 'Confirmed' ? '#166534' : '#92400e'
                }}>
                  {course.status}
                </span>
                
                <button style={{
                  padding: '6px 12px',
                  border: '1px solid #ef4444',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  color: '#ef4444',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  Drop
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="btn btn-primary">
            Add More Courses
          </button>
          <button style={{
            padding: '8px 24px',
            backgroundColor: '#16a34a',
            color: 'white',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
            Submit Registration
          </button>
          <button style={{
            padding: '8px 24px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            backgroundColor: 'white',
            color: '#374151',
            cursor: 'pointer'
          }}>
            Print Schedule
          </button>
        </div>
      </div>

      {/* Important Dates */}
      <div className="card mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Important Dates</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
            <span>Registration Deadline</span>
            <span style={{ fontWeight: '600' }}>January 31, 2025</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
            <span>Add/Drop Period Ends</span>
            <span style={{ fontWeight: '600' }}>February 14, 2025</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
            <span>Semester Begins</span>
            <span style={{ fontWeight: '600' }}>February 3, 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}