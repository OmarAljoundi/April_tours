"use client";
import { useState } from "react";
import ContentService from "../services/ContentService";
import CustomerService from "../services/CustomerService";
import LocationService from "../services/LocationService";
import TourService from "../services/TourService";
import { SearchQuery } from "@/models/interface/Search";
import { ICustomer } from "@/models/interface/Customer";

const useApiService = () => {
  const [loading, setLoading] = useState(false);

  const onGetLocations = (search: SearchQuery) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      LocationService.search(search)
        .then((res) => {
          setLoading(false);
          resolve(res.data);
        })
        .catch((err) => {
          setLoading(false);
          reject(err);
        });
    });
  };

  const onSearchGeneral = (search: SearchQuery) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      TourService.searchGeneral(search)
        .then((res) => {
          setLoading(false);
          resolve(res.data);
        })
        .catch((err) => {
          setLoading(false);
          reject(err);
        });
    });
  };

  const onGetTabs = (search: SearchQuery) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      TourService.searchTabs(search)
        .then((res) => {
          setLoading(false);
          resolve(res.data);
        })
        .catch((err) => {
          setLoading(false);
          reject(err);
        });
    });
  };

  const onGetTabTitles = (search: SearchQuery) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      LocationService.getTabs(search)
        .then((res) => {
          setLoading(false);
          resolve(res.data);
        })
        .catch((err) => {
          setLoading(false);
          reject(err);
        });
    });
  };

  const onReadContent = () => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      ContentService.readContent()
        .then((res) => {
          setLoading(false);
          resolve(res.data);
        })
        .catch((err) => {
          setLoading(false);
          reject(err);
        });
    });
  };

  const onGetFeed = () => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      ContentService.getFeeds()
        .then((res) => {
          setLoading(false);
          resolve(res.data);
        })
        .catch((err) => {
          setLoading(false);
          reject(err);
        });
    });
  };

  const onSubmitForm = (c: ICustomer) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      CustomerService.submitForm(c)
        .then((res) => {
          setLoading(false);
          resolve(res.data);
        })
        .catch((err) => {
          setLoading(false);
          reject(err);
        });
    });
  };

  const onSearchTours = (search: SearchQuery) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      TourService.search(search)
        .then((res) => {
          setLoading(false);
          resolve(res.data);
        })
        .catch((err) => {
          setLoading(false);
          reject(err);
        });
    });
  };

  const onGetTourTypes = (g?: boolean) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      ContentService.getTourTypes(g)
        .then((res) => {
          setLoading(false);
          resolve(res.data);
        })
        .catch((err) => {
          setLoading(false);
          reject(err);
        });
    });
  };

  return {
    onGetLocations,
    onSubmitForm,
    onGetTabs,
    onGetTabTitles,
    onReadContent,
    onGetFeed,
    onGetTourTypes,
    onSearchTours,
    onSearchGeneral,
    loading,
  };
};

export default useApiService;
