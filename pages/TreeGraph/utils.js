// 生成随机数
export function randomString(e) {
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}

// 为每个节点添加属性
export function insertAttr(originData, insertObj) {
  const tempData = originData.map((item) => {
    if (item.children) {
      const childrenElement = insertAttr(item.children, randomString(8));
      return Object.assign(item, {
        children: childrenElement,
        cusID: randomString(8),
      });
    }
    return Object.assign(item, { cusID: insertObj });
  });
  return tempData;
}

export function delUndefined(inCome) {
  return Array.from(new Set(inCome)).filter((ele) => Boolean(ele));
}
// 生成每个节点路径
export function nodePath(originData, customSymbol) {
  const setData = [];
  const haddlePath = (originData, tempData) => {
    const eachMap = originData.map((item) => {
      if (item.children) {
        if (tempData) {
          haddlePath(
            item.children,
            `${tempData} ${customSymbol} ${item.cusID}`
          );
        } else {
          haddlePath(item.children, item.cusID);
        }
      } else {
        if (tempData) {
          return `${tempData} ${customSymbol} ${item.cusID}`;
        } else {
          return item.cusID;
        }
      }
    });
    Array.prototype.push.apply(setData, eachMap);
  };
  haddlePath(originData);
  return delUndefined(setData);
}

//一维化数据
export function downGradeData(originData, idValue, parentValue, accTemp = []) {
  return originData.reduce((acc, cur) => {
    if (cur.children) {
      const filterData = Object.keys(cur).filter((item) => item !== "children");
      const convertData = filterData.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = cur[currentValue];
        accumulator["parendId"] = parentValue ? parentValue[idValue] : "root";
        return accumulator;
      }, {});
      accTemp.push(convertData);
      return downGradeData(cur.children, idValue, cur, accTemp);
    }
    cur["parendId"] = parentValue ? parentValue[idValue] : "root";
    acc.push(cur);
    return acc;
  }, accTemp);
}

//键名分类
export function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
