
import React from "react";
import Tg from "./Tg";
import Button from "./Button";
import { useState } from "react";
// "./" : 같은 폴더 내에서 찾을 떄
// 퍼블릭으로 찾고 싶으면 "../" 로
//count 는 변수 setCount 는 함수 
const App = () => {
  const [count,setCount] = useState(0);
  const increase =() =>{
    setCount((prev)=>prev+1);
  };

  return(
    <div>
      <h1>hello</h1>
      <Tg name="kja" asd = "1234"/>
      <div>
        <Button name = "증가" onClick={increase}/>
        <Button name = "감소"/>
      </div>
    </div>
  ); 
};