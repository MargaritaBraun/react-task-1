const RegionValues = [
  'No select',
  'Antarctic',
  'Americas',
  'Europe',
  'Africa',
  'Asia',
  'Oceania',
] as const;

type RegionValuesType = (typeof RegionValues)[number];

export default RegionValues;
export type { RegionValuesType };
