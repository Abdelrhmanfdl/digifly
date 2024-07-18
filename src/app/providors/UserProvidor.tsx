"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { usersStore } from "../redux/usersStore";

export default function UserProvidor({ children }: { children: ReactNode }) {
  return <Provider store={usersStore}>{children}</Provider>;
}
