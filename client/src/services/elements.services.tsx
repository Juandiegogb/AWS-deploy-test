import { ElementInterface } from "@/lib/definitions";
import { apiUrl } from "@/lib/variables";

export const fetchElements = async () => {
  const response = await fetch(`${apiUrl}/elements`, { method: "GET" });
  const data: ElementInterface[] = await response.json();
  return data;
};
