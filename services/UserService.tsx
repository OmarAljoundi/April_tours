import { IUser } from "@/models/interface/User";
import { http } from "./httpService";
import axios from "axios";
import { IUserResponse } from "@/models/interface/Response";

class UserService {
  tryAuth(data: IUser) {
    return http(axios.create()).post<IUserResponse>(
      `/User/AuthenticateUser`,
      data
    );
  }

  addNewUser(user: IUser) {
    return http(axios.create()).post<IUserResponse>(`/User/AddNewUser`, user);
  }
  search() {
    return http(axios.create()).get<IUserResponse>(`/User/Search`);
  }
}

export default new UserService();
