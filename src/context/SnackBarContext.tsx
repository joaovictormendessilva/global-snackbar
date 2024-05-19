import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
import { ReactNode, createContext, useContext, useState } from "react";

export type snackBarContextProps = {
  showSnackBar: (message: string) => void;
};

const snackBarContext = createContext<snackBarContextProps | null>(null);

export const SnackBarProvider = ({ children }: { children: ReactNode }) => {
  const [snackBar, setSnackBar] = useState<SnackbarProps>({
    open: false,
    autoHideDuration: 6000,
    message: "",
  });

  const showSnackBar = (message: string) => {
    setSnackBar({
      open: true,
      message,
      autoHideDuration: 6000,
      onClose: () => setSnackBar({ ...snackBar, open: false }),
    });
  };

  return (
    <snackBarContext.Provider value={{ showSnackBar }}>
      {children}
      <Snackbar
        {...snackBar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </snackBarContext.Provider>
  );
};

export const useSnackBarContext = () => {
  const context = useContext(snackBarContext);

  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }

  return context;
};
