import React from 'react'

class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render () {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" placeholder="Player's name" />
                <input type="text" placeholder="Player's name" />
                <button>Submit</button>
            </form>
        );
    }
}

export default FormComponent