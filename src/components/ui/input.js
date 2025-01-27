// ui/input.js
import React from 'react';

export const Input = ({ id, placeholder, type }) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
    />
  );
};

