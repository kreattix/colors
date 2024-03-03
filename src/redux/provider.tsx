"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { FC, ReactNode } from "react";

interface ReduxProviderProps {
  children: ReactNode;
}

export const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
