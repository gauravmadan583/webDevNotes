import React from 'react';
import Input from './Input';


const FormComponent = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <Input size="gridSize" placeholder="Enter the grid size" />
        <Input size="playerSize" placeholder="Enter the no. of players" />
        <button>Lets play the game!</button>
    </form>
  )
}

export default FormComponent