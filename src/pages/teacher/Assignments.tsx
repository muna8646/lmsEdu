import React from 'react';
import { FileText, Calendar, Users, Plus, CheckCircle, Clock } from 'lucide-react';

const TeacherAssignments = () => {
  const assignments = [
    {
      id: 1,
      title: 'JavaScript Fundamentals Quiz',
      course: 'Web Development Fundamentals',
      dueDate: '2024-03-20',
      submissions: 32,
      totalStudents: 45,
      status: 'Active',
    },
    {
      id: 2,
      title: 'CSS Layout Project',
      course: 'Web Development Fundamentals',
      dueDate: '2024-03-25',
      submissions: 28,
      totalStudents: 45,
      status: 'Draft',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Assignments</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          Create Assignment
        </button>
      </div>

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
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {assignment.submissions}/{assignment.totalStudents} Submissions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    assignment.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {assignment.status}
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Clock className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-gray-50 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
                  View Submissions
                </button>
                <button className="flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100">
                  Edit Assignment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherAssignments;