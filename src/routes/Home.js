import React, { useState } from 'react';

const Home = () => {
  const [sweet, setSweet] = useState('');
  const onSubmit = event => {
    event.preventDefault();
  };
  const onChange = event => {
    const {
      target: { value },
    } = event;
    setSweet(value);
  };

  return (
    <div className="container">
      <form className="white">
        <div className="input-field">
          <input
            value={sweet}
            onChange={onChange}
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
          />
        </div>
        <input
          type="submit"
          value="Sweet"
          onSubmit={onSubmit}
          className="btn pink lighten-1 z-depth-0"
        />
      </form>
    </div>
  );
};

export default Home;
