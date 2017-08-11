import React from 'react';

const TextField = (props) => {
  return (
    <label onChange={props.handleChange}>{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        placeholder= {props.placeholder}
        maxLength={props.maxLength}
      />
    </label>
  );
}

export default TextField;
