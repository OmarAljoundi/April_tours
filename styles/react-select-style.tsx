import { StylesConfig } from "react-select";

export const ReactSelectStyle: StylesConfig<any, true> = {
  control: (styles: any) => ({ ...styles, backgroundColor: "white" }),
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    return {
      ...styles,

      ":hover": {
        ...styles[":hover"],
        backgroundColor: "#3093d0",
        color: "white",
        cursor: "pointer",
      },
      ":active": {
        ...styles[":active"],
        backgroundColor: "#3093d0",
        color: "white",
      },
    };
  },
  multiValue: (styles: any, { data }: any) => {
    return {
      ...styles,
      backgroundColor: "#3093d0",
    };
  },
  multiValueLabel: (styles: any, { data }: any) => ({
    ...styles,
    color: "white",
  }),
  multiValueRemove: (styles: any, { data }: any) => ({
    ...styles,
    color: "white",
    ":hover": {
      backgroundColor: "red",
      color: "white",
    },
  }),
  singleValue: (styles: any, { data }: any) => ({
    ...styles,
    width: "fit-content",
    display: "inline-block",
    padding: "2px 10px",
    fontSize: "16px",
    backgroundColor: "#3093d0 ",
    color: "#fff!important",
    borderRadius: "8px",
  }),
};
