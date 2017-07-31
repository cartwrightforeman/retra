import React from 'react';

const BodyField = (props) => {
  return (
    <label onChange={props.handleChange}>{props.label}
      <textarea
        name={props.name}
        value={props.content}
      />
    </label>
  );
}

export default BodyField;
