"use client";
import { Provider } from "react-redux";
import store from "./Redux-main";
import { ReactNode } from 'react';

interface ReduxProviderProps {
  children: ReactNode;
}

function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;