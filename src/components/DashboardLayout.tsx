import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useAuthStore } from '../store/authStore';

export const DashboardLayout = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role={user.role} />
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};