import toast from "react-hot-toast";
const notifySuccess = (message: any) =>
  toast.success(message, {
    style: {
      border: "1px solid #f2c710",
      color: "white",
      background: "#0d4d90",
    },
    iconTheme: {
      primary: "#f2c710",
      secondary: "white",
    },
    duration: 5000,
  });

export { notifySuccess };
