import React, { Component } from 'react'

class Sample04 extends Component {
    constructor(props){
        super(props);
        this.state = {isConfirmed : false};

        this.handleConfirmed = this.handleConfirmed.bind(this);
    }

    handleConfirmed(){
        this.setState(prevState => ({        
            isConfirmed : !prevState.isConfirmed   
        }));
    }

    render() {
        return (
            <button onClick={this.handleConfirmed} disabled={this.state.isConfirmed}>
                {this.state.isConfirmed ? '확인됨' : '확인하기'}
            </button>
        )
    }
}

export default Sample04