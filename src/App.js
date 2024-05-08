import logo from "./logo.svg";
import "./App.css";
import { Avatar } from "./Avatar";
import { ListPart } from "./ListPart";
import body1 from "./character/body/1.png";
import body2 from "./character/body/2.png";
import ear1 from "./character/accessories/earrings/2.png";
import hair1 from "./character/hair/1.png";
import hair2 from "./character/hair/2.png";
import hair3 from "./character/hair/3.png";
import hair4 from "./character/hair/4.png";
import hair5 from "./character/hair/5.png";
import hair6 from "./character/hair/6.png";
import { useState } from "react";

function App() {
  const bodyImage = [body1, body2];
  const hairImages = [hair1, hair2, hair3, hair4, hair5, hair6];
  const earImages = [ear1];
  const [body, setBody] = useState();

  console.log("App", body);
  return (
    <div className="App">
      <Avatar key="avatar" body={body} />
      <ListPart key="list-part1" images={bodyImage} setBody={setBody} />
      <ListPart key="list-part2" images={hairImages} />
      <ListPart key="list-part3" images={earImages} />
    </div>
  );
}

export default App;
