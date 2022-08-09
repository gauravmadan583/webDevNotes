import React from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import BoardGameComponent from './components/BoardGameComponent';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			firstPlayerName: "Player 1",
			secondPlayerName: "Player 2",
			turn: -1,
			board: [
				'E','E','E','E','E','E','E','E','E'
			],
			error: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.gameMove = this.gameMove.bind(this);
		this.ifGameOver = this.ifGameOver.bind(this);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(e);
		if(e.target[0].value){
			this.setState({
				firstPlayerName: e.target[0].value
			})
		}
		if(e.target[1].value){
			this.setState({
				secondPlayerName: e.target[1].value
			})
		}
		this.setState({
			turn: 0
		})
	}

	gameMove (e) {
		// console.log("Game move");
		// console.log(e.target.id);
		if(this.state.board[e.target.id] !== 'E'){
			this.setState({
				error: "Already filled"
			})
		}else{
			this.setState({
				error: ""
			})

			const newboard = this.state.board;
			// const newturn = this.state.turn;
			if(this.state.turn === 0){
				newboard[e.target.id] = 'X';
			}else{
				newboard[e.target.id] = 'O';
			}
			this.setState({
				board: newboard
			});
			const playerWon = this.ifGameOver(e.target.id);
			if(playerWon!=-1) {
				if (playerWon === 0){
					this.setState({
						turn: -1,
						error: "Draw",
						board: [
							'E','E','E','E','E','E','E','E','E'
						]
					})
				}else{
					this.setState({
						turn: -1,
						error: "Player "+playerWon+" wins",
						board: [
							'E','E','E','E','E','E','E','E','E'
						]
					})
				}
				
			}

			this.setState((state, props) => ({
				turn: (state.turn + 1)%2
			}))
		}
		// console.log(this.state.turn);
	}

	ifGameOver = (moveIndex) => {
		console.log(moveIndex);
		// horizontal
		let start = Math.floor(moveIndex/3)*3;
		if(this.state.board[start]!=='E' && this.state.board[start] === this.state.board[start+1] && this.state.board[start] === this.state.board[start+2]){
			return this.state.turn+1;
		}
		// vertical
		start = moveIndex%3;
		if(this.state.board[start]!=='E' && this.state.board[start] === this.state.board[start+3] && this.state.board[start] === this.state.board[start+6]){
			return this.state.turn+1;
		}
		// diagnols
		if(moveIndex%2 === 0) {
			if(moveIndex===4){
				if(this.state.board[0]!=='E' && this.state.board[0] === this.state.board[4] && this.state.board[0] === this.state.board[8]){
					return this.state.turn+1;
				}
				if(this.state.board[2]!=='E' && this.state.board[2] === this.state.board[4] && this.state.board[2] === this.state.board[6]){
					return this.state.turn+1;
				}
			}else if(moveIndex%4===0){
				if(this.state.board[0]!=='E' && this.state.board[0] === this.state.board[4] && this.state.board[0] === this.state.board[8]){
					return this.state.turn+1;
				}				
			}else{
				if(this.state.board[2]!=='E' && this.state.board[2] === this.state.board[4] && this.state.board[2] === this.state.board[6]){
					return this.state.turn+1;
				}
			}
		}
		for(let i of this.state.board){
			console.log(i);
			if(i === 'E') return -1;
		}
		return 0;
	}
	render() {
		return (
			<div>
				<FormComponent handleSubmit={this.handleSubmit}/>
				{this.state.firstPlayerName}, {this.state.secondPlayerName}

				{this.state.turn!=-1? <BoardGameComponent board={this.state.board} turn={this.state.turn} gameMove={this.gameMove}/>:<></>}

				{this.state.error}
			</div>

		);
	}

}

export default App;
