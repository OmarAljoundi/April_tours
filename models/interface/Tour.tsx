import { FileType } from "./Location";
export interface ITour {
  id: number;
  name: string | null;
  code: string | null;
  startDay: string | null;
  additionalInfo: string | null;
  numberOfDays: number | null;
  price: number | null;
  seoTitle: string | null;
  seoDescription: string | null;
  seoTag: string | null;
  seoAlt: string | null;
  typeId: number | null;
  hotels: string | null;
  createdDate: string | null;
  imageUrl: string | null;
  tourIncludes: ITourIncludes[];
  tourExcludes: ITourExcludes[];
  tourPricing: ITourPricing[];
  tourSections: ITourSections[];
  tourCountries: ITourCountries[];
  tourImages: ITourImages[];
  tourType: ITourType | null;
  file?: FileType | null;
  active: boolean;
}

export interface ITourCountries {
  id: number;
  tourId: number;
  label: string;
  icon: string;
}

export interface ITourExcludes {
  id: number;
  tourId: number;
  title: string;
  details: string;
}

export interface ITourIncludes {
  id: number;
  tourId: number;
  title: string;
  details: string;
}

export interface ITourPricing {
  id: number;
  tourId: number;
  tourDate: string | null;
  innerRoom: string | null;
  seeView: string | null;
  balconyRoom: string | null;
  singlePrice: string | null;
  singular: boolean | null;
  allMonth: boolean;
}

export interface ITourSections {
  id: number;
  tourId: number;
  title: string;
  description: string;
}

export interface ITourType {
  id: number;
  type: string;
  count: number;
  price: number;
  icon: string;
}
export interface ITourImages {
  id: number;
  imageOrder: number;
  imageUrl: string;
  imageUrlThumb: string;
}
