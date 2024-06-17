import React, { Component } from 'react'

class Sample01 extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn : true};

        //  클래스 컴포넌트에서는 
        //  바인딩 함수는 필수적으로 사용해줘야 한다.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({        
            isToggleOn : !prevState.isToggleOn    //  이전꺼를 바꿔서 넘겨주세요
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.isToggleOn ? '켜짐' : '꺼짐'}</button>
        )
    }
}

export default Sample01