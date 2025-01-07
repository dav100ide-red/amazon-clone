"use client";
import store from "@/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import Header from "./header/header";

interface ClientProviderProps {
    children: ReactNode;
}

const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <Header />
            {children}
        </Provider>
    );
};

export default ClientProvider;
