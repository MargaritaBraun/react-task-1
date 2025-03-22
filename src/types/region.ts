const RegionValues = [
  'No select',
  'Africa',
  'Americas',
  'Antarctic',
  'Asia',
  'Europe',
  'Oceania',
] as const;

type RegionValuesType = (typeof RegionValues)[number];

export default RegionValues;
export type { RegionValuesType };
