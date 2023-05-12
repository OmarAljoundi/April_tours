import { BaseResponse } from './BaseResponse'
import { IContent } from './Content'
import { ICustomer } from './Customer'
import { TInstagram } from './Instagram'
import { ILocation, ILocationTours } from './Location'
import { ITour } from './Tour'
import { IUser } from './User'

export interface ILocationResponse extends BaseResponse {
    location: ILocation
    locations: ILocation[]
    total: number
}

export interface ITourResponse extends BaseResponse {
    tour: ITour
    tours: ITour[]
    total: number
}

export interface IUserResponse extends BaseResponse {
    user: IUser
    users: IUser[]
}

export interface ICustomerResponse extends BaseResponse {
    customer: ICustomer
    customers: ICustomer[]
    total: number
}

export interface IContentResponse extends BaseResponse {
    content: IContent
}


export interface ILocationResponse extends BaseResponse {
  location: ILocation
  locations: ILocation[]
  total: number
}

export interface ITourResponse extends BaseResponse {
  tour: ITour
  tours: ITour[]
  total: number
}

export interface IUserResponse extends BaseResponse {
  user: IUser
  users: IUser[]
}

export interface ICustomerResponse extends BaseResponse {
  customer: ICustomer
  customers: ICustomer[]
  total: number
}

export interface IContentResponse extends BaseResponse {
  content: IContent
}

export interface ILocationToursResponse extends BaseResponse {
  locationTours: ILocationTours[]
  locationTour: ILocationTours
  seoTitle: string
  seoDescription: string
  seoTags: string
  total: number
}

export interface IInstagramResponse extends BaseResponse {
  instagram: TInstagram[]
}
