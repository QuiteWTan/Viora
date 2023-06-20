import React, { useState } from 'react';
import classNames from 'classnames';

function AnimatedInput() {
    const [isFocused, setIsFocused] = useState(false);
  
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
  
    const inputClasses = classNames(
      'py-2 px-4 rounded-md transition-all duration-300',
      {
        'ring-2 ring-blue-500': isFocused,
        'ring-2 ring-gray-300': !isFocused,
      }
    );
  
    return (
      <div className="">
        <input
          type="text"
          className={inputClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder='Username'
        />
      </div>
    );
  }

  export default AnimatedInput