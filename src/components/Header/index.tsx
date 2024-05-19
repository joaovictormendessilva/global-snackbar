import { useEffect } from "react";
import api from "../../axios/config";

export function Header() {
  useEffect(() => {
    api.get("people/199");
  }, []);

  return <h1>Este componente consultou a API</h1>;
}
