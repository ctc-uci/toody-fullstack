import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Entry from '../../components/Entry/Entry';
import './JournalEntries.css';

const JournalEntries = ({ entries }) => {
  const [newEntry, setNewEntry] = useState('');
  const [change, setChange] = useState(false);
  const addNewEntry = e => {
    e.preventDefault();
    setChange(!change);
    entries.push({ id: '0', entry: newEntry, date: '10/30/2022' });
  };

  useEffect(() => {
    console.log('journal entry called with', entries);
    setNewEntry('');
  }, []);

  return (
    <div className="journal-content">
      <h2>Journal Entries</h2>
      <form className="new-entry" onSubmit={addNewEntry}>
        <textarea
          value={newEntry}
          onChange={e => setNewEntry(e.target.value)}
          placeholder="Write notes about how you're feeling!"
        />
        <button className="submit-entry" type="submit">
          Save
        </button>
      </form>
      <div className="journal">
        {entries.map(e => (
          <Entry key={e.toString()} date={e.date} entry={e.text} />
        ))}
      </div>
    </div>
  );
};

JournalEntries.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default JournalEntries;
