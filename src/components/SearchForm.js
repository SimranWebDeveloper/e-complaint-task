import React from 'react'
import { Button } from './Button';

export const SearchForm = ({icon,placeholder,onClick}) => {
  return (
    <div className='flex justify-between items-center gap-1 shadow-lg rounded-default  bg-white  px-4 py-1'>
    <Button text={icon}            onClick={onClick}          />
    <input className='rounded-default  text-base  placeholder:text-sm outline-none px-1' placeholder={placeholder} />
    </div>
  )
}
