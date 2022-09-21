import React, { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Button from '../../Button/Index';
import { useForm } from 'react-hook-form';

const Form = ({ inputs, setShiftState }) => {
  const [formData, setFormData] = useState([]);
  let options;
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  if (inputs) {
    console.log(inputs[inputs.length - 1].options.length);
    options = inputs[inputs.length - 1].options.length;
  }

  useEffect(() => {
    if (inputs) {
      setFormData(inputs);
    }
  }, [inputs, options]);

  const onSubmit = (data) => {
    setShiftState(data);
  };
  return (
    <>
      <form className="form">
        {formData &&
          formData.map((input, i) => {
            let { type, options, name } = input;
            if (type === 'dropdown') {
              return (
                <div key={i} className="form-group row my-3 px-3">
                  <label className="col-form-label col-md-2">{name}</label>
                  <div className="col-md-10">
                    <select
                      className="form-control"
                      {...register(`${input.name}`, { required: true })}
                    >
                      <option value="">Select Office</option>
                      {options.length > 0 &&
                        options.map((el) => (
                          <option key={el.id} value={el.id}>
                            {el.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              );
            }
            return (
              <Input
                key={i}
                type={input.type}
                label={input.label}
                data={{ ...register(`${input.name}`, { required: true }) }}
              />
            );
          })}
      </form>
      <div className="table_footer">
        <Button btnText="Add" onClick={handleSubmit(onSubmit)} />
      </div>
    </>
  );
};

export default Form;
