import React, { useState, useEffect, useMemo } from "react";
import GroupRender from "./GroupRender";
import { originData } from "./contant";
import {
  insertAttr,
  randomString,
  downGradeData,
  groupBy,
  nodePath,
} from "./utils";

const { Fragment } = React;
export default () => {
  //抛开业务 为每个节点添加自定义随机ID
  const insertData = useMemo(
    () => insertAttr(originData, randomString(8)),
    [originData.length]
  );

  //生成关系路径
  const relaPath = useMemo(() => nodePath(insertData, "->"), [
    originData.length,
  ]);
  //一维化tree数据，为每个节点添加parendId,
  const downGrade = useMemo(() => downGradeData(insertData, "cusID"), [
    originData.length,
  ]);
  //新建对象 键名为父名,键值为子节点
  const groupSort = useMemo(() => groupBy(downGrade, "parendId"), [
    originData.length,
  ]);

  console.log(groupSort, relaPath, "groupSort");
  return (
    <Fragment>
      <GroupRender groupData={originData} />
    </Fragment>
  );
};
