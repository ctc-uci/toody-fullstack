import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Popover, ArrowContainer } from 'react-tiny-popover';
import './Entry.css';

const Entry = ({ id, date, entry }) => {
  const [open, setOpen] = useState(false);
  console.log(id);
  return (
    <div className="entry">
      <div className="entry-header">
        <p>{date}</p>
        <Popover
          isOpen={open}
          onClickOutside={() => setOpen(false)}
          positions={['right', 'bottom']}
          content={({ position, childRect, popoverRect }) => (
            <ArrowContainer
              position={position}
              childRect={childRect}
              popoverRect={popoverRect}
              arrowColor={'#FFFFFF'}
              arrowSize={10}
              className="popover-arrow-container"
              arrowClassName="popover-arrow"
            >
              <div className="more">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </ArrowContainer>
          )}
        >
          <button className="open-more-button" type="button" onClick={() => setOpen(!open)}>
            More
          </button>
        </Popover>
      </div>
      <div className="entry-content">{entry}</div>
    </div>
  );
};

Entry.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  entry: PropTypes.string.isRequired,
};

export default Entry;
