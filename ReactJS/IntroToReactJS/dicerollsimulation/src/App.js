import { useState } from 'react';
import FormComponent from './components/FormComponent';

const randomNumberGenerator = () => {
    return 1 + Math.floor(Math.random()*6);
}


const playGame = (playerSize, gridSize) => {

	let playersArray = [];

	for (let i=0;i<playerSize;i++){
		playersArray.push({
			id: i,
			moves: [0],
			currPos: 0,
			posHistory: [0]
		});
	}
	// console.log(playersArray);

	let maxPos = 0, index = -1;


	while(maxPos<gridSize*gridSize) {

		for(let i=0;i<playerSize;i++){
			const numberRolled = randomNumberGenerator();
			console.log(numberRolled);
			playersArray[i].moves.push(numberRolled);
			if((playersArray[i].currPos === 0) && (numberRolled!=1 && numberRolled!=6) ){

			}else {
				if(playersArray[i].currPos + numberRolled > gridSize*gridSize){
					
				} else {
					playersArray[i].currPos += numberRolled;
				}

			}
			playersArray[i].posHistory.push(playersArray[i].currPos);


			if(maxPos < playersArray[i].currPos){
				maxPos = playersArray[i].currPos;
				index = i;
			}

			if(maxPos === gridSize*gridSize){
				break;
			}
		}
	}

	// console.log(playersArray);
	return index;
}
function App() {

  const [playerSize, setPlayerSize] = useState(null);
  const [gridSize, setGridSize] = useState(null);
  const [playerWon, setPlayerWon] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    setGridSize(parseInt(e.target[0].value));
    setPlayerSize(parseInt(e.target[1].value));

    console.log(playerSize, gridSize);

	const temp = playGame(playerSize, gridSize);
	console.log(temp);
    setPlayerWon(temp+1);
  }


  return (
    <div className="App">
      	<FormComponent handleSubmit={handleSubmit} />
		<p>{playerWon}</p>
    </div>
  );
}

export default App;
