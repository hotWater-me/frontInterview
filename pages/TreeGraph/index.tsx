import React, { useState, useEffect } from "react";
import style from "./style.less";
import { originData } from '../contant'

const { Fragment } = React;
interface compStyleType {
    contextFarHeight: number
}

export default () => {
  const [responseHeight, setResponseHeight] = useState<compStyleType>({contextFarHeight : 0});
  useEffect(() => {
    const contextFarHeight = document.getElementById("contextFar")?.clientHeight as number;
    setResponseHeight({contextFarHeight : contextFarHeight});
  },[]);

  const showHeight = responseHeight.contextFarHeight;
  return (
    <Fragment>
      <div className={style.comStyle} style={{ height: showHeight + 32 }}>
        <div
          className={style.borderStyle}
          style={{ height: showHeight - 76 }}
        />
        <div
          className={style.blueDiv}
          style={{ top: showHeight / 2 - 20 }}
        ></div>
        <div className={style.contextFar} id="contextFar">
          {Array.from("dd5s4").map(() => (
            <div className={style.contextdiv}></div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
