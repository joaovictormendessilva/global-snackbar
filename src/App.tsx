import { useEffect } from "react";

import "./App.css";
import { useSnackBarContext } from "./context/SnackBarContext";
import { setupInterceptors } from "./axios/config";
import { Header } from "./components/Header";

function App() {
  const snackBarContext = useSnackBarContext();
  useEffect(() => {
    setupInterceptors(snackBarContext);
  }, [snackBarContext]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
