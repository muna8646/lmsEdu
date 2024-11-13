import React from 'react';
import { FileText, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const StudentAssignments = () => {
  const assignments = [
    {
      id: 1,
      title: 'JavaScript Fundamentals Quiz',
      course: 'Web Development Fundamentals',
      dueDate: '2024-03-20',
      status: 'Completed',
      grade: '95%',
    },
    {
      id: 2,
      title: 'CSS Layout Project',
      course: 'Web Development Fundamentals',
      dueDate: '2024-03-25',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Responsive Design Assignment',
      course: 'Web Development Fundamentals',
      dueDate: '2024-03-18',
      status: 'Late',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Late':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'Pending':
        return <Calendar className="w-5 h-5 text-yellow-600" />;
      case 'Late':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Assignments</h1>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="border-b last:border-0 pb-6 last:pb-0 mb-6 last:mb-0">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{assignment.title}</h3>
                    <p className="text-gray-500 text-sm">{assignment.course}</p>
                    
                    <div className="flex items-center gap-6 mt-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Due: {assignment.dueDate}</span>
                      </div>
                      {assignment.grade && (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-600 font-medium">
                            Grade: {assignment.grade}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {getStatusIcon(assignment.status)}
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(assignment.status)}`}>
                    {assignment.status}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-gray-50 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
                  View Details
                </button>
                {assignment.status === 'Pending' && (
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Start Assignment
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentAssignments;