import React from 'react';
import Input from './Input';


const FormComponent = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <Input placeholder="Enter the grid size" />
        <Input placeholder="Enter the no. of players" />
        <button>Lets play the game!</button>
    </form>
  )
}

export default FormComponent