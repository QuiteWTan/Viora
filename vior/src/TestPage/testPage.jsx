import React, { useState } from 'react';
import AnimatedInput from '../FormComponent/AnimatedInput';

const ParentComponent = () => {
  const [formValues, setFormValues] = useState({
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <AnimatedInput
        type="email"
        name="email"
        iconName="envelope"
        handleChange={handleChange}
        values={formValues.email}
      />
    </div>
  );
};

export default ParentComponent;