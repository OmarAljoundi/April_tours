import { ITourType } from "./Tour";

export interface HeaderSearch {
  countries?: CountriesSearch[];
  period?: PeriodSearch[];
  types?: string[];
  price?: { min: number | null; max: number | null; label: string | null };
  days?: string[];
  pageSize?: number;
  pageIndex?: number;
}

export interface CountriesSearch {
  label: string;
  value: string;
  code?: string;
  icon?: string;
  name?: string;
}

export interface PeriodSearch {
  label: string;
  min: number;
  max: number;
}
