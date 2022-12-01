import React from 'react';

function Button({ Submit }) {
  return (
    <div className="button">
      <button type="submit" onClick={Submit} className="btn">
        Search
      </button>
    </div>
  );
}

export default Button;
