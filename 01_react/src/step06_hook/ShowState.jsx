import React, { useMemo } from "react";

const getNumber = (number) => {
    console.log("숫자가 변동 되었습니다.");
    return number;
}

const getText = (text) => {
    console.log("문자가 변동 되었습니다.");
    return text;
}

const ShowState = ({number, text}) => {
    /* 
    const showNumber = getNumber(number);
    const showText = getText(text);
    */

    //  메모 훅 사용
    const showNumber = useMemo(() => getNumber(number), [number]);
    const showText = useMemo(() => getText(text), [text]);

    return(
        <div>
            {showNumber} <br />
            {showText} <br />
        </div>
    )
}

export default ShowState;