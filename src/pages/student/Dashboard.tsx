import React from 'react';
import { BookOpen, Clock, Award, BarChart } from 'lucide-react';

const StudentDashboard = () => {
  const courses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      progress: 75,
      nextLesson: 'CSS Layouts',
      instructor: 'Sarah Johnson',
    },
    {
      id: 2,
      title: 'JavaScript Basics',
      progress: 45,
      nextLesson: 'Functions & Scope',
      instructor: 'Michael Chen',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Welcome back, Alex!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-gray-500 text-sm">Enrolled Courses</h3>
          <p className="text-2xl font-bold mt-1">4</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-gray-500 text-sm">Hours Spent</h3>
          <p className="text-2xl font-bold mt-1">26</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-gray-500 text-sm">Certificates</h3>
          <p className="text-2xl font-bold mt-1">2</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <BarChart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-gray-500 text-sm">Avg. Grade</h3>
          <p className="text-2xl font-bold mt-1">92%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Current Courses</h2>
          <div className="space-y-6">
            {courses.map((course) => (
              <div key={course.id} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{course.title}</h3>
                  <span className="text-sm text-gray-500">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-blue-500 rounded-full h-2" 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Next: {course.nextLesson}</span>
                  <span>{course.instructor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Assignments</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="bg-red-100 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-medium">JavaScript Basics Quiz</p>
                <p className="text-sm text-gray-500">Due in 2 days</p>
              </div>
            </div>
            {/* More assignments */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;