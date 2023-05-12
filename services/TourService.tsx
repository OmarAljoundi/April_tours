import { ITourResponse } from "@/models/interface/Response";
import { http } from "./httpService";
import axios from "axios";
import { ITour } from "@/models/interface/Tour";
import { SearchQuery } from "@/models/interface/Search";

class TourService {
  create(data: ITour) {
    return http(axios.create()).post<ITourResponse>(`/Tour/Create`, data);
  }

  uploadImage(data: FormData) {
    return http(axios.create()).post<ITourResponse>(`/Tour/Upload`, data);
  }
  search(search: SearchQuery) {
    return http(axios.create()).post<ITourResponse>(`/Tour/Search`, search);
  }

  getTour(id: number) {
    return http(axios.create()).get<ITourResponse>(`/Tour/${id}`);
  }

  removeTour(id: number) {
    return http(axios.create()).delete<ITourResponse>(`/Tour/${id}`);
  }

  searchTabs(search: SearchQuery) {
    return http(axios.create()).post<ITourResponse>(`/Tour/SearchTabs`, search);
  }
  searchGeneral(search: SearchQuery) {
    return http(axios.create()).post<ITourResponse>(
      `/Tour/SearchGeneral`,
      search
    );
  }
}

export default new TourService();
