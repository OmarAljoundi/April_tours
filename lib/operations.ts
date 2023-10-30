import {
  Customer,
  Hotel,
  Location,
  LocationAttributes,
  Response,
  Setting,
  Tour,
  TourType,
} from "@/types/custom";
import { supabaseClient } from "./supabaseClient";
import {
  CONFIG_PATH,
  REVALIDATE_HOTEL_LIST,
  REVALIDATE_LOCATION_LIST,
  REVALIDATE_TOUR_LIST,
  REVALIDATE_TOUR_TYPE,
  SETTING_PATH,
} from "./keys";
import { SearchQuery } from "@/types/search";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";
import { http } from "@/services/httpService";

export async function updateTourStatus(
  status: boolean,
  id: number
): Promise<Response<any>> {
  const { error } = await supabaseClient
    .from("tour")
    .update({ is_active: status })
    .eq("id", id);

  if (error) {
    throw new Error(`faild to update tour status, ${error.message}`);
  }

  await http<any>(`/api/revalidate?tag=${REVALIDATE_TOUR_LIST}`, {
    revalidate: 0,
  }).get();

  return {
    message: "Tour updated successfully..",
    success: true,
  };
}
export async function getTourTypes(): Promise<Response<TourType>> {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 100,
    Select: "*",
    Table: "tour_type",
  };
  const response = await http<Response<TourType>>("/api/search", {
    revalidate: 86400,
    tags: [REVALIDATE_TOUR_TYPE],
  }).post(_SQ);
  return response;
}

export async function createTour(tour: Tour) {
  const _tour = { ...tour };
  const { data, error } = await supabaseClient
    .from("tour")
    .insert(_tour as any)
    .select("*")
    .single();

  if (error) {
    console.log("Errors in creating tours.. ", error);
    throw new Error(error.message);
  }

  return data;
}

export async function updateTour(tour: Tour) {
  const { data, error } = await supabaseClient
    .from("tour")
    .update(tour as any)
    .eq("id", tour.id!)
    .select("*")
    .single();

  if (error) {
    console.log("Errors in updating tour.. ", error);
    throw new Error(error.message);
  }

  return data;
}

export async function createTourType(type: TourType) {
  const { data, error } = await supabaseClient
    .from("tour_type")
    .insert(type as any)
    .select("*")
    .single();

  if (error) {
    console.log("Errors.. ", error);
    throw new Error(error.message);
  }

  return data;
}

export async function updateTourType(type: TourType) {
  const { data, error } = await supabaseClient
    .from("tour_type")
    .update(type as any)
    .eq("id", type.id!)
    .select("*")
    .single();

  if (error) {
    console.log("Errors.. ", error);
    throw new Error(error.message);
  }

  return data;
}

export async function createDestination(dest: Location) {
  const { data, error } = await supabaseClient
    .from("location")
    .insert(dest as any)
    .select("*")
    .single();

  if (error) {
    console.log("Errors.. ", error);
    throw new Error(error.message);
  }

  return data;
}

export async function updateDestination(dest: Location) {
  const { data, error } = await supabaseClient
    .from("location")
    .update(dest as any)
    .eq("id", dest.id!)
    .select("*")
    .single();

  if (error) {
    console.log("Errors.. ", error);
    throw new Error(error.message);
  }

  return data;
}
export async function getTours() {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 1000,
    Select: "*,tour_type(*)",
    Table: "tour",
  };
  const response = await http<Response<Tour>>("/api/search", {
    revalidate: 86400,
    tags: [REVALIDATE_TOUR_LIST],
  }).post(_SQ);
  return response.results;
}

export async function getDestination() {
  var _SQ: SearchQuery = {
    FilterByOptions: [],
    OrderByOptions: [],
    PageIndex: 0,
    PageSize: 1000,
    Select: "*,location_attributes(*,location_tours(*))",
    Table: "location",
  };
  return await http<Response<Location>>("/api/search", {
    revalidate: 86400,
    tags: [REVALIDATE_LOCATION_LIST],
  }).post(_SQ);
}

export async function createDestinationAttr(
  destinationAttr: LocationAttributes
) {
  let id: number = 0;

  if (destinationAttr.id) {
    const { error } = await supabaseClient
      .from("location_tours")
      .delete()
      .eq("location_attr_id", destinationAttr.id);
    if (error) {
      console.log("error", error);
      throw new Error("Error happend while delete destination tours");
    }

    const locationAtrrResponse = await supabaseClient
      .from("location_attributes")
      .update({
        order: Number(destinationAttr.order),
        seo: destinationAttr.seo,
        title: destinationAttr.title,
        location_id: destinationAttr.location_id,
      })
      .eq("id", destinationAttr.id!)
      .select("*")
      .single();

    if (locationAtrrResponse.error) {
      throw new Error(
        "Error happend while updating destination tours " +
          locationAtrrResponse.error.message
      );
    }

    id = locationAtrrResponse.data.id;
  } else {
    const locationAtrrResponse = await supabaseClient
      .from("location_attributes")
      .insert({
        order: Number(destinationAttr.order),
        seo: destinationAttr.seo,
        title: destinationAttr.title,
        location_id: destinationAttr.location_id,
      })
      .select("*")
      .single();

    if (locationAtrrResponse.error) {
      throw new Error(
        "Error happend while creating destination tours " +
          locationAtrrResponse.error.message
      );
    }

    id = locationAtrrResponse.data.id;
  }

  if (
    destinationAttr.location_tours &&
    destinationAttr.location_tours.length > 0
  ) {
    const locationToursResponse = await supabaseClient
      .from("location_tours")
      .insert(
        destinationAttr.location_tours.map((x) => {
          return {
            location_attr_id: id,
            tour_id: x.tour_id,
            location_id: x.location_id,
          };
        })
      );
    if (locationToursResponse.error) {
      console.log("location Tours Response error", locationToursResponse.error);
      throw new Error(
        "Error while creating location tours " +
          locationToursResponse.error.message
      );
    }
  }
}

export async function createHotel(hotel: Hotel) {
  const { data, error } = await supabaseClient
    .from("hotel")
    .insert(hotel as any)
    .select("*")
    .single();

  if (error) {
    console.log("Errors.. ", error);
    throw new Error(error.message);
  }

  return data;
}
export async function updateHotel(hotel: Hotel) {
  const { data, error } = await supabaseClient
    .from("hotel")
    .update(hotel as any)
    .eq("id", hotel.id!)
    .select("*")
    .single();

  if (error) {
    console.log("Errors.. ", error);
    throw new Error(error.message);
  }

  return data;
}

export const getContentData = async () => {
  const { data, error } = await supabaseClient.storage
    .from("April")
    .list(SETTING_PATH);

  let responseData: Setting | undefined;

  if (data && data.length > 0 && data.find((x) => x.name === CONFIG_PATH)) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_IMAGE_URL}/${SETTING_PATH}/${CONFIG_PATH}`,
      {
        next: { revalidate: 0 },
      }
    );

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    responseData = (await response.json()) as Setting;

    return responseData;
  }
};

export async function submitForm(formData: Customer) {
  const { data, error } = await supabaseClient
    .from("customer")
    .insert(formData as any)
    .select("*,tour(name)")
    .single();

  if (error) {
    console.log("error", error);
    return {
      error: error.details,
      success: false,
    };
  }
}
