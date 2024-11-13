import React from 'react';
import { BookOpen, Users, Clock, Star } from 'lucide-react';

const StudentCourses = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Sarah Johnson',
      progress: 75,
      totalStudents: 45,
      rating: 4.8,
      nextLesson: 'CSS Layouts',
    },
    {
      id: 2,
      title: 'JavaScript Basics',
      instructor: 'Michael Chen',
      progress: 45,
      totalStudents: 32,
      rating: 4.5,
      nextLesson: 'Functions & Scope',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>

      <div className="grid grid-cols-1 gap-6">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm">
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold">{course.title}</h2>
                      <p className="text-gray-500">Instructor: {course.instructor}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{course.totalStudents} Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">8 weeks</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Course Progress</span>
                  <span className="text-blue-600 font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 rounded-full h-2" 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-medium text-blue-800 mb-1">Next Lesson</h3>
                <p className="text-blue-600">{course.nextLesson}</p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-gray-50 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
                  Course Details
                </button>
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Continue Learning
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;