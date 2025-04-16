"use client";
import store from "@/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import Header from "./header/header";
import Footer from "./footer/footer";
import { IconContext } from "react-icons";

interface ClientProviderProps {
    children: ReactNode;
}

const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <IconContext.Provider value={{ size: "16", className: "icon" }}>
                <Header />
                {children}
                <Footer />
            </IconContext.Provider>
        </Provider>
    );
};

export default ClientProvider;
