import React from 'react';
import { BarChart, Users, BookOpen, CheckSquare } from 'lucide-react';

const TeacherDashboard = () => {
  const stats = [
    { label: 'Active Courses', value: '12', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Total Students', value: '156', icon: Users, color: 'bg-green-500' },
    { label: 'Assignments', value: '48', icon: CheckSquare, color: 'bg-purple-500' },
    { label: 'Completion Rate', value: '87%', icon: BarChart, color: 'bg-yellow-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Teacher Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
            <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-500 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* Activity items */}
            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">New course material uploaded</p>
                <p className="text-sm text-gray-500">Web Development Fundamentals</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">2h ago</span>
            </div>
            {/* More activity items */}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {/* Deadline items */}
            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="bg-red-100 p-2 rounded-lg">
                <CheckSquare className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-medium">Assignment Due</p>
                <p className="text-sm text-gray-500">JavaScript Basics - Module 2</p>
              </div>
              <span className="ml-auto text-sm text-red-500">Tomorrow</span>
            </div>
            {/* More deadline items */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;