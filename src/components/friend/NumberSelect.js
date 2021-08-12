import React from 'react';

const NumberSelect = ({ value, options, postfix, onChange }) => {
  const onChangeSelect = e => {
    const value = Number(e.currentTarget.value);
    onChange(value);
  };

  return (
    <div>
      <select onBlur={onChangeSelect} defaultValue={value || ''}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {postfix}
    </div>
  );
};

export default NumberSelect;
