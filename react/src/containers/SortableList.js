import React from 'react';
import BoardTile from '../components/BoardTile';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableList = SortableContainer(({boards}) => {
  let sortedBoards;
  sortedBoards = boards.map((value, index) => {
    return(
      <BoardTile
        key={`item-${index}`}
        index={index}
        board={value}
      />
    )
  })

  return (
    <ul>
      {sortedBoards}
    </ul>
  );
});

export default SortableList;


// sortedBoards = boards.map((value, index) => {
//   let handleClick = () => {
//     sendID(value.id);
//   }
//   return(
//     <BoardTile
//       key={`item-${index}`}
//       index={index}
//       board={value}
//       handleClick={handleClick}
//     />
//   )
// })
