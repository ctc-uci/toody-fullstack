import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SlOptions } from 'react-icons/sl';
import { Popover, ArrowContainer } from 'react-tiny-popover';
import './ListItem.css';

const ListItem = ({ id, item }) => {
  const [open, setOpen] = useState(false);
  console.log(id, open);

  return (
    <div className="list-item">
      <input className="checkbox" type="checkbox" />
      <p>{item}</p>
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
            <div className="menu">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </ArrowContainer>
        )}
      >
        <button className="open-menu-button" type="button" onClick={() => setOpen(!open)}>
          <SlOptions style={{ color: '#FFFFFF' }} />
        </button>
      </Popover>
    </div>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
};

export default ListItem;
