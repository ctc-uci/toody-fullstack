import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem/ListItem';
import { SlPlus } from 'react-icons/sl';
import './ToDo.css';

// items = [{id, item, checked}, ...]
const ToDo = ({ items }) => {
  const [newTask, setNewTask] = useState('');
  const [change, setChange] = useState(false);

  const addNewTask = e => {
    e.preventDefault();
    setChange(!change);
    items.push({ id: '0', item: newTask });
  };

  useEffect(() => {
    console.log('ToDo called with', items);
    setNewTask('');
  }, []);

  return (
    <div className="to-do-content">
      <h2>Today&apos;s To Do</h2>
      <div className="to-do-list">
        {items.map(i => (
          <ListItem key={i.toString()} item={i.text} />
        ))}
      </div>
      {/* submit by button or by pressing enter */}
      <form onSubmit={addNewTask}>
        <button className="add-task-button" type="submit">
          <SlPlus style={{ fontSize: '24px', color: '#FFFFFF' }} />
        </button>
        <input
          className="add-task-input"
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
      </form>
    </div>
  );
};

ToDo.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ToDo;
