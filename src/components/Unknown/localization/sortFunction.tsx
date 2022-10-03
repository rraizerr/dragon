const dynamicSort = (property: any) => {
  let sortOrder = 1;
  let prop = property;
  if (prop[0] === '-') {
    sortOrder = -1;
    prop = prop.substr(1);
  }
  return function (a: any, b: any) {
    let result;
    if (a[prop] < b[prop]) {
      result = -1;
    } else if (a[prop] > b[prop]) {
      result = 1;
    } else {
      result = 0;
    }
    return result * sortOrder;
  };
};

export default dynamicSort;
