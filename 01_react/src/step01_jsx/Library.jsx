import React from "react";
import Book from "./Book";

function Library(props) {
    return(<div>
       <Book name="처음 만난 리엑트" numOfPage="300" />     
       <Book name="처음 만난 스프링부트" numOfPage="250" />     
       <Book name="처음 만난 VSCode" numOfPage="50" />     
    </div>)
}

export default Library;