const collectionCountry = (item: string, isCheck: boolean): boolean => {
  let arr: string[] = [];
  const keyInlocalStorage = 'collection';
  const storedData = window.localStorage.getItem(keyInlocalStorage);

  if (storedData) {
    arr = JSON.parse(storedData);
  }

  if (isCheck) {
    return arr.includes(item);
  }

  if (arr.includes(item)) {
    const currentIndex = arr.indexOf(item);
    const newArr = [
      ...arr.slice(0, currentIndex),
      ...arr.slice(currentIndex + 1, arr.length),
    ];
    arr = newArr;
  } else {
    arr.push(item);
  }

  const newArr = JSON.stringify([...arr]);
  window.localStorage.setItem(keyInlocalStorage, newArr);
  return true;
};
export default collectionCountry;
