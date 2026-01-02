'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ClientDashboardPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="mb-6">Manage your homepage content</p>
        <Link
          href="/homepageeditor"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Open Editor
        </Link>
      </div>
    </div>
  );
}


