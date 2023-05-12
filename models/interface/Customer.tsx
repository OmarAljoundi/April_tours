import { ITour } from "./Tour";
import { IUser } from "./User";

export interface ICustomer {
  id: number;
  tourId: number;
  assignedTo: string;
  phoneNumber: string | null;
  email: string | null;
  name: string | null;
  notes: string | null;
  contactMethod: eContactMethod | null;
  status: eCustomerStatus;
  createdDate: string | null;
  modifiedDate: string | null;
  tour: ITour | null;
  user: IUser | null;
}

export enum eCustomerStatus {
  All = 0,
  Pending = 1,
  Completed = 2,
  No_Answer = 3,
}
export enum eContactMethod {
  WhatsApp = 1,
  Call = 2,
}
