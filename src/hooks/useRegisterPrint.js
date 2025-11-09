import { useEffect } from "react";
import usePrintStore from "@stores/usePrintStore";

export default function useRegisterPrint(handlePrint) {
  const setPrintFunction = usePrintStore((s) => s.setPrintFunction);

  useEffect(() => {
    if (!setPrintFunction) return;
    setPrintFunction(handlePrint);
  }, [handlePrint, setPrintFunction]);
}
