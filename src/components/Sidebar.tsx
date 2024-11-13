import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  FileText, 
  BarChart,
  Settings,
  LogOut
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface SidebarProps {
  role: 'admin' | 'teacher' | 'student';
}

export const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const signOut = useAuthStore((state) => state.signOut);

  const menuItems = {
    admin: [
      { icon: Users, label: 'Users', path: '/admin/users' },
      { icon: BookOpen, label: 'Courses', path: '/admin/courses' },
      { icon: BarChart, label: 'Analytics', path: '/admin/analytics' },
      { icon: Settings, label: 'Settings', path: '/admin/settings' },
    ],
    teacher: [
      { icon: BookOpen, label: 'My Courses', path: '/teacher/courses' },
      { icon: FileText, label: 'Assignments', path: '/teacher/assignments' },
      { icon: Users, label: 'Students', path: '/teacher/students' },
      { icon: BarChart, label: 'Progress', path: '/teacher/progress' },
    ],
    student: [
      { icon: BookOpen, label: 'Courses', path: '/student/courses' },
      { icon: FileText, label: 'Assignments', path: '/student/assignments' },
      { icon: BarChart, label: 'Progress', path: '/student/progress' },
    ],
  };

  const items = menuItems[role];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <GraduationCap className="w-8 h-8" />
        <span className="text-xl font-bold">EduLMS</span>
      </div>
      
      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <button
        onClick={() => signOut()}
        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors absolute bottom-8 w-[calc(100%-2rem)]"
      >
        <LogOut className="w-5 h-5" />
        <span>Sign Out</span>
      </button>
    </div>
  );
};