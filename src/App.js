import logo from "./logo.svg";
import "./App.css";
import { Avatar } from "./components/Avatar";

import { useState } from "react";
import { ListPart } from "./components/ListPart";

function App() {
  const [hair,setHair] = useState("hair/1.png");
  const [body,setBody] = useState("body/1.png");
  const [eyes,setEyes] = useState("eyes/1.png")




  
  return (
    <div className="App">
      <Avatar key="avatar" body={body} hair={hair} eyes={eyes}  />


      <ListPart total={17} path={"body"}  setState={setBody}></ListPart>
      <ListPart total={17} path={"eyes"} setState={setEyes}></ListPart>
      <ListPart total={73} path={"hair"} setState={setHair}></ListPart>
      <ListPart total={24} path={"mouths"}></ListPart>
      <ListPart total={15} path={"eyebrows"}></ListPart>
      <ListPart total={28} path={"accessories/hats"}></ListPart>
      <ListPart total={17} path={"accessories/glasses"}></ListPart>
      <ListPart total={5} path={"clothes/layer_1"}></ListPart>
      <ListPart total={5} path={"clothes/layer_2"}></ListPart>
      <ListPart total={9} path={"clothes/layer_3"}></ListPart>
    </div>
  );
}

export default App;
