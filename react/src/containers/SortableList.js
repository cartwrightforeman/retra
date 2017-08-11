import React from 'react';
import BoardTile from '../components/BoardTile';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableList = SortableContainer(({boards, sendID}) => {
  let sortedBoards;
  sortedBoards = boards.map((value, index) => {
    let handleClick = () => {
      console.log("why won't handleclick work")
      sendID(value.id);
    }
    // debugger;
    return(
      <BoardTile
        key={`item-${index}`}
        index={index}
        board={value}
        handleClick={handleClick}
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
