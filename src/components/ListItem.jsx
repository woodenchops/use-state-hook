import React from 'react'

const ListItem = ({name, percentage, onUpdatePercentage, id}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{percentage}</p>
      <input type="number" value={percentage} onChange={(e) => onUpdatePercentage(e, id)} />

    </div>
  )
}

export default ListItem;
