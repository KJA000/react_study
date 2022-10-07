import React from "react";
import "./App.css"
const Button = (props) => {
  return(
    <button className="btn">{props.name}</button>
  ); 
};
//컴포넌트(Tg) 쓰는 이유 : 재사용
export default Button;
//디자인은 같고 기능은 다르게 하기
//프롭스 사용해서 

