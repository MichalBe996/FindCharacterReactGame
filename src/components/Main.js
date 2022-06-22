import React from 'react'
import myImage from "./large.png"


function imageClicked(e){
    let cursorX;
    let cursorY;
    cursorX = e.pageX;
    cursorY = e.pageY;
    console.log(` X COORDINATE ${cursorX}`)
    console.log(` Y COORDINATE ${cursorY}`)
    let myBox = document.querySelector(".box");
    myBox.classList.add("visible");
    myBox.style.position = "absolute";
    myBox.style.left = (cursorX - 40) +'px';
    myBox.style.top = (cursorY - 40) +'px';
    if(cursorX >= 658 && cursorX <= 728 && cursorY >= 650 && cursorY <= 720){
        myBox.style.border = "5px solid green";
        document.querySelector(".message").textContent = "You found him!"
    } else {
        myBox.style.border = "5px solid red";
        document.querySelector(".message").textContent = "That's not him!"

    }
    
  
}


function Main() {
  return (
    <div>
        <img className="charactersPicture" id="charPic" src={myImage} onClick={imageClicked}></img>
        <div className="box"></div>
    </div>
  )
}

export default Main