import { toast } from "react-toastify";

export const formatter = new Intl.NumberFormat("en-US");

export const notify = () =>
  toast.success("success", {
    position: "bottom-center",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
