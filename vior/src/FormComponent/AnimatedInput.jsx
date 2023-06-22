import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const AnimatedInput = ({type,name,iconName,iconType,handleChange,values}) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password:''
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name)
    handleChange(name, value);
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = ( ) => {
    setIsFocused(false);
  };

  return (
    <div className={`relative py-2 px-4 border rounded-sm focus:outline-none transition-colors flex flex-row items-center justify-between w-full${
      isFocused ? 'border-gray-500' : 'border-gray-300'
    }`}>
      <input
        type={type}
        placeholder={name}
        className='focus:outline-none bg-transparent'
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        value={values}
      />
      <box-icon name={iconName} type={iconType}></box-icon>
      <div
        className={`absolute bottom-0 left-0 h-[2px] w-full bg-slate-500 transition-transform rounded-sm ${
          isFocused ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </div>
  );
};

  export default AnimatedInput