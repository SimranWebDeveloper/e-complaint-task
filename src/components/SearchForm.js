import React from 'react';
import { ButtonCustom } from './ButtonCustom';

export const SearchForm = ({ icon, placeholder, onChange }) => {
  return (
    <div className='flex justify-between items-center gap-1 rounded-default bg-white px-4 py-1 focus-within:shadow-lg mb-4'>
      {icon}
      <input
        className='rounded-default text-base placeholder:text-sm outline-none px-1 '
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

