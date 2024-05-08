import body1 from "./character/body/1.png";
import eyes1 from "./character/eyes/1.png";
import era1 from "./character/accessories/earrings/1.png";
import glass2 from "./character/accessories/glasses/2.png";

import hair from "./character/hair/1.png";
import hat1 from "./character/accessories/hats/1.png";
import neck1 from "./character/accessories/neckwear/1.png";
import trangphuc1_1 from "./character/clothes/layer_1/1.png";
import trangphuc2_1 from "./character/clothes/layer_2/2.png";
import longmay from "./character/eyebrows/6.png";
import mouths from "./character/mouths/2.png";

// import "./Avatar.css"

export const Avatar = ({ body }) => {
  console.log("Avatar", body);
  return (
    <div className="avatar">
      Avatar
      <img src={body} />
      <img src={eyes1} />
      <img src={glass2} />
      <img src={era1} />
      <img src={hair} />
      <img src={neck1} />
      <img src={trangphuc1_1} />
      <img src={trangphuc2_1} />
      <img src={longmay} />
      <img src={mouths} />
    </div>
  );
};
