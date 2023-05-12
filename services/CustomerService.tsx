import { SearchQuery } from "@/models/interface/Search";
import { http } from "./httpService";
import axios from "axios";
import { ICustomerResponse } from "@/models/interface/Response";
import { ICustomer } from "@/models/interface/Customer";

class CustomerService {
  search(search: SearchQuery) {
    return http(axios.create()).post<ICustomerResponse>(
      `/Customer/Search`,
      search
    );
  }

  getCustomer(id: number) {
    return http(axios.create()).get<ICustomerResponse>(`/Customer/${id}`);
  }

  updateCustomer(customer: ICustomer) {
    return http(axios.create()).post<ICustomerResponse>(
      `/Customer/UpdateCustomer`,
      customer
    );
  }

  submitForm(customer: ICustomer) {
    return http(axios.create()).post<ICustomerResponse>(
      `/Customer/SubmitForm`,
      customer
    );
  }
}

export default new CustomerService();
