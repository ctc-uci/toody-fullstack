import React from 'react';
import PropTypes from 'prop-types';
import './Stat.css';

const Stat = ({ number, description }) => {
  return (
    <div className="stat">
      <div className="stat-number">{number}</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
};

Stat.propTypes = {
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Stat;
