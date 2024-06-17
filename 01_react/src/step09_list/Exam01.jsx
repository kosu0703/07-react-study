import React from 'react'

function Exam01(props) {
    
    const list = props.list;

    const listItems = list.map((key, index) => {
        return(
            <li key={index}>{key}</li>
        )
    });
    
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default Exam01