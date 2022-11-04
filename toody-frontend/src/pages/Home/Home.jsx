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

  const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {'X-Custom-Header': 'foobar'}
  });

  const getTodos = async () => {
    // TODO: Complete this function with an axios.get() call
    // to the appropriate backend endpoint for todos. The todos on
    // the homepage should populate correctly when this is done.
    const data = await instance.get("/todos");
    setTodos(data.data);
  };

  const getNotes = async () => {
    // TODO: Complete this function with an axios.get() call to the
    // appropriate backend endpoint for notes. The notes on the
    // homepage should populate correctly when this is done.
    // const data = await axios.get("localhost:3001/notes/");
    // data.map(d => <Component data={d} />);
    const data = await instance.get("/notes");
    setNotes(data.data);
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
