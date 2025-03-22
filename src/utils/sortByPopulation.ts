const quckSortByPopulation = <T>(
  data: T[],
  key: keyof T,
  sortBy: 'ascending' | 'descending' = 'ascending'
): T[] => {
  if (data.length <= 1) return data;
  const centerIndex: number = Math.floor(data.length / 2);
  const center = data[centerIndex];
  if (!center[key]) {
    return [
      ...quckSortByPopulation(data.slice(0, centerIndex), key, sortBy),
      ...quckSortByPopulation(data.slice(centerIndex + 1), key, sortBy),
    ];
  }
  const left: T[] = [];
  const right: T[] = [];
  for (let i = 0; i < data.length; i++) {
    if (i === centerIndex) continue;
    if (!data[i][key]) {
      continue;
    }

    const conver =
      sortBy === 'ascending'
        ? data[i][key] < center[key]
        : data[i][key] > center[key];
    if (conver) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }
  return [
    ...quckSortByPopulation(left, key, sortBy),
    center,
    ...quckSortByPopulation(right, key, sortBy),
  ];
};

export default quckSortByPopulation;
