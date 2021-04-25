import React, { useState, useEffect } from "react";
import style from "./style.less";

const { Fragment } = React;
interface compStyleType {
  contextFarHeight: number;
}
interface groupType {
  groupData: any[];
}

export default (props: groupType) => {
  const { groupData } = props;
  const [responseHeight, setResponseHeight] = useState<compStyleType>({
    contextFarHeight: 0,
  });
  useEffect(() => {
    const contextFarHeight = document.getElementById("contextFar")
      ?.clientHeight as number;
    setResponseHeight({ contextFarHeight: contextFarHeight });
  }, []);
  const showHeight = responseHeight.contextFarHeight;

  // 渲染组，里面嵌入Item
  const renderGroup = (curData: any[]) =>
    curData.map(() => <div className={style.contextdiv}></div>);
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
          {renderGroup(groupData)}
        </div>
      </div>
    </Fragment>
  );
};
