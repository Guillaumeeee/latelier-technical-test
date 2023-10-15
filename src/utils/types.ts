export type CountryStatisticsType = {
  country: string;
  winRatio: number;
};

export type CountriesType = {
  [code: string]: CountryStatisticsType;
};
