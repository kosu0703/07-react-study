import React from 'react'
import { Ex02F, Ex02T } from './Ex02TF';

function Ex02(props) {

    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <Ex02T />
    }
    return <Ex02F />
}

export default Ex02