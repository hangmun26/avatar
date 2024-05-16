import React from "react";


export function Avatar({
  body,
  eyes,
  clothes1,
  clothes2,
  clothes3,
  hair,
  mouths,
  noses,
  facial,
  eyebrows,
}) {
  console.log("body", body);
  return (
    <div className="avatar">
       <img src={`images/character/${body}`} alt="body" style={{'z-index':0}}/>
       <img src={`images/character/${eyes}`} alt="eyes" style={{'z-index':0}}/>
       <img src={`images/character/${clothes1}`} alt="clothes1" style={{'z-index':0}}/>
       <img src={`images/character/${clothes2}`} alt="clothes2" style={{'z-index':2}}/>
       <img src={`images/character/${clothes3}`} alt="clothes3" style={{'z-index':3}}/>
       <img src={`images/character/${hair}`} alt="hair" style={{'z-index':0}}/>
       <img src={`images/character/${mouths}`} alt="mouths" style={{'z-index':0}}/>
       <img src={`images/character/${noses}`} alt="noses" style={{'z-index':0}}/>
       <img src={`images/character/${facial}`} alt="facial" style={{'z-index':0}}/>
       <img src={`images/character/${eyebrows}`} alt="eyebrows" style={{'z-index':0}}/>
   
       

    </div>
  );
}

// export default Avatar;
