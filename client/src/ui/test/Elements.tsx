import { ElementInterface } from "@/lib/definitions";
import { fetchElements } from "@/services/elements.services";
import React from "react";

export const Elements = async () => {
  const elements: ElementInterface[] = await fetchElements();

  return (
    <div>
      {elements.map((element) => (
        <Element element={element} key={element._id} />
      ))}
    </div>
  );
};

const Element = ({ element }: { element: ElementInterface }) => {
  return (
    <div>
      <p>{element.name}</p>
      <p>{element._id}</p>
      <p>{element.code}</p>
      <p>{element.price}</p>
      <p>{element.quantity}</p>
    </div>
  );  
};
