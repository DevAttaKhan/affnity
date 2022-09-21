import React from 'react';
import Input from '../Input/Input';

const Form = ({ inputs, onChange }) => {
  return (
    <form className="form">
      {inputs.map((input, i) => (
        <Input
          key={i}
          name={input.name}
          type={input.type}
          label={input.label}
          value={input.value}
          onChange={onChange}
        />
      ))}
    </form>
  );
};

export default Form;
