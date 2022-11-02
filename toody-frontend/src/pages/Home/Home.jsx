// Group 11: Kei Asakawa, Mandy Feng, Andrew Lee

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ToDo from './ToDo';
import JournalEntries from './JournalEntries';
import { SlArrowDown } from 'react-icons/sl';
import './Home.css';

const Home = ({ name }) => {
  const [ todos, setTodos ] = useState([]);
  const [ notes, setNotes ] = useState([]);

  // ignore this line; this gets the React app to run properly
  console.log(axios, setTodos, setNotes);

  const getTodos = async () => {
    // TODO: Complete this function with an axios.get() call
    // to the appropriate backend endpoint for todos. The todos on
    // the homepage should populate correctly when this is done.

    const todos = await axios.get('http://localhost:3001/todos/');
    setTodos(todos.data);
  };

  const getNotes = async () => {
    // TODO: Complete this function with an axios.get() call to the
    // appropriate backend endpoint for notes. The notes on the
    // homepage should populate correctly when this is done.
  };

  useEffect(() => {
    getTodos();
    getNotes();
  }, []);

  return (
    <div className="home">
      <div className="landing">
        Hello {name}! Welcome to Toody.
        <br />
        You&apos;ve been using Toody for 100 days!
        <button
          className="scroll-down"
          onClick={e => {
            let join = document.getElementById('to-do');
            e.preventDefault();
            join.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <SlArrowDown style={{ fontSize: '52px', color: '#FFFFFF' }} />
        </button>
      </div>
      <div className="to-do" id="to-do">
        <ToDo items={todos} />
      </div>
      <div className="journal-entries">
        <JournalEntries entries={notes} />
      </div>
    </div>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
