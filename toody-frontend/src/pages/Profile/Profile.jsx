import React from 'react';
import PropTypes from 'prop-types';
import person from '../../images/person.png';
import Stat from '../../components/Stat/Stat';
import './Profile.css';

const Profile = ({ firstName, lastName, stats }) => {
  return (
    <div className="profile-page">
      <div className="profile-page-content">
        <div className="avatar">
          <img src={person} alt="person icon" />
        </div>
        <div className="profile-info">
          <h1>{firstName + ' ' + lastName}</h1>
          <div className="all-stats">
            {stats.map(s => (
              // eslint-disable-next-line react/jsx-key
              <Stat number={s.number} description={s.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Profile;
