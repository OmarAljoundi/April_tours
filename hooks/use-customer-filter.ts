import { QueryString } from "@/lib/utils";
import { create } from "zustand";

interface useCustomerFilterProps {
  filter: QueryString;
  total?: number;
  onAdd: (filter: QueryString) => void;
  onClear: () => void;
  onSetTotal: (total: number) => void;
}

export const useCustomerFilter = create<useCustomerFilterProps>((set) => ({
  filter: {
    country: [],
    days: [],
    maxprice: null,
    location: null,
    tab: null,
    type: [],
  },
  onSetTotal: (total: number) => set({ total: total }),
  onAdd: (data: QueryString) => set({ filter: { ...data } }),
  onClear: () =>
    set({
      filter: {
        country: [],
        days: [],
        maxprice: null,
        location: null,
        tab: null,
        type: [],
      },
      total: undefined,
    }),
}));
