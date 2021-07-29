import React from 'react';
import PropTypes from 'prop-types';
// import {Draggable} from 'react-beautiful-dnd';
import styles from './Card.scss';

const Card = ({title, id, index}) => {
  console.log(id, index);
  return (
    // <Draggable draggableId={id} index={index}>
    //   {(provided) => (
    //     <div
    //       className={styles.component}
    //       {...provided.draggableProps}
    //       {...provided.dragHandleProps}
    //       ref={provided.innerRef}
    //     >
    //       {title}
    //     </div>
    //   )}
    // </Draggable>
    <div className={styles.component}>
      {title}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Card;
