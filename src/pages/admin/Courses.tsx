import React from 'react';
import { BookOpen, Plus, Search, Users, Clock } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Sarah Johnson',
      students: 45,
      duration: '8 weeks',
      status: 'Active',
    },
    {
      id: 2,
      title: 'JavaScript Basics',
      instructor: 'Michael Chen',
      students: 32,
      duration: '6 weeks',
      status: 'Active',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Courses Management</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          Add Course
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="p-4">
            <div className="grid gap-4">
              {courses.map((course) => (
                <div key={course.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{course.title}</h3>
                        <p className="text-gray-500">Instructor: {course.instructor}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="w-4 h-4 mr-1" />
                            {course.students} students
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {course.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;