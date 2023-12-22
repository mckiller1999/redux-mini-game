import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const ChildHookEffect = () => {
  let [num, setNum] = useState(1);
  console.log("renderChildHookEffect ");
  useEffect(() => {
    //viết cho didUpdate
    console.log("didUpdate");
    return () => {
      console.log("willUnmount");
    };
  }, [num]);
  return (
    <div>
      <textarea rows="" cols=""></textarea>
      <br />
      <button className="btn btn-success">add</button>
    </div>
  );
};

export default ChildHookEffect;
