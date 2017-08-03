import React from 'react';

const TextField = (props) => {
  return (
    <label onChange={props.handleChange} onSubmit={props.handleFormSubmit}>{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        autoComplete="off" 
      />
    </label>
  );
}

export default TextField;
