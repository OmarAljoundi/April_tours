import {
  ILocationResponse,
  ILocationToursResponse,
} from "@/models/interface/Response";
import { http } from "./httpService";
import axios from "axios";
import { SearchQuery } from "@/models/interface/Search";

class LocationService {
  search(search: SearchQuery) {
    return http(axios.create()).post<ILocationResponse>(
      `/Location/Search`,
      search
    );
  }

  getLocation(id: number) {
    return http(axios.create()).get<ILocationResponse>(`/Location/${id}`);
  }

  getTabs(Search: SearchQuery) {
    return http(axios.create()).post<ILocationToursResponse>(
      `/Location/SearchTitles`,
      Search
    );
  }
}

export default new LocationService();
