import React from "react";
import Stores from "./Stores";
import Store from "./Store/Store";

const Bottom = ({ idStoreOpen }: { idStoreOpen: string | null }) => {
  if (idStoreOpen) {
    return <Store storeId={idStoreOpen} />;
  }
  return <Stores />;
};

export default Bottom;
