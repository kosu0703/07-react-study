import React from "react";
import Comment from "./Comment";

//  나중에는 DB 처리
const comments = [
    {
        name : "홍길동",
        comment : "방가 방가"
    },
    
    {
        name : "둘리",
        comment : "호이 호이"
    },
    
    {
        name : "마이콜",
        comment : "깐따 삐아"
    },

    {
        name : "희동이",
        comment : "응애 응애"
    }

];

function CommentList(props) {
    return(
        <dev>
            {
                comments.map((k) => {
                    return(
                        <Comment name={k.name} comment={k.comment} />
                    );        
                })
            }
        </dev>
    )
}

export default CommentList;