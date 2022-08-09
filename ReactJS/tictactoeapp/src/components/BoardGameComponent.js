import React from 'react'

class BoardGameComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const blocks = document.getElementsByClassName('block');

        for(let i of blocks) {
            i.addEventListener('click', this.props.gameMove);
        }
    }
    render () {
        return (
            <div className='game'>
                {this.props.board.map((element, index) => {
                    return (<div className='block' key={index} id={index}>{element}, {index}</div>);
                })}

            </div>
        );
    }
}

export default BoardGameComponent;
