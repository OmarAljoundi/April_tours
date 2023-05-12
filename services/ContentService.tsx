import { ITourType } from "@/models/interface/Tour";
import { http } from "./httpService";
import axios from "axios";
import { IContent } from "@/models/interface/Content";
import {
  IContentResponse,
  IInstagramResponse,
} from "@/models/interface/Response";

class ContentService {
  getTourTypes(g: boolean) {
    return http(
      axios.create({
        headers: {
          "x-group-by": g,
        },
      })
    ).get<ITourType[]>(`/Content/TourTypes`);
  }

  writeContent(body: IContent) {
    return http(axios.create()).post<IContentResponse>(`/Content/Write`, body);
  }
  readContent() {
    return http(axios.create()).get<IContentResponse>(`/Content/Read`);
  }

  getFeeds() {
    return http(axios.create()).get<IInstagramResponse>(
      `/Content/InstagramFeed`
    );
  }
}

export default new ContentService();
