import React from 'react'
import Ex01T from './Ex01T';
import Ex01F from './Ex01F';

function Ex01(props) {

    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <Ex01T />
    }
    return <Ex01F />
}

export default Ex01