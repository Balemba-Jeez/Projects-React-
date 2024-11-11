import React from 'react'

function MyCom() {

    var cTime = "The" + "Current  time" + " is" + `${new Date().toTimeString()}`//new Date().toDateString();
    var attr_testVar = "attri_test";
//    const getCurrentTime_Fmt = () => {return "The" + "Current  time" + " is" + `${new Date().toDateString()}`}
      const getCurrentTime_Fmt = () => {return new Date().toTimeString()}
    return <div><p> The current time is <span className = {attr_testVar}>  {getCurrentTime_Fmt()}  </span></p></div>
}

export default MyCom