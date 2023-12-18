import React from 'react';
import classes from './MySelect.module.css';

export const MySelect = ({ value, onChange, name, id }) => {
  return (
    <select
      className={classes.mySelect}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
    >
      <option value="email">Email</option>
      <option value="phone">Phone</option>
      <option value="link">Link</option>
    </select>
  );
};
