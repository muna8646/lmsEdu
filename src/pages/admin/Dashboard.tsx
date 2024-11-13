import React from 'react';
import { Users, BookOpen, GraduationCap, BarChart } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { label: 'Active Courses', value: '45', icon: BookOpen, color: 'bg-green-500' },
    { label: 'Teachers', value: '28', icon: GraduationCap, color: 'bg-purple-500' },
    { label: 'Students', value: '1,189', icon: Users, color: 'bg-yellow-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
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
          <h2 className="text-xl font-semibold mb-4">System Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <BarChart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">System Usage</p>
                  <p className="text-sm text-gray-500">Active users in last 24h</p>
                </div>
              </div>
              <span className="text-2xl font-semibold">456</span>
            </div>
            {/* More stats */}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
              <div className="bg-green-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium">New Teacher Registration</p>
                <p className="text-sm text-gray-500">John Doe joined as instructor</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">2h ago</span>
            </div>
            {/* More activities */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;