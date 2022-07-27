import React, {createContext,useContext,useState,useEffect} from "react";

const Crypto = createContext();

const ContextApi = ({children}) => {
    const [symbol, setSymbol] = useState("₹");
    const [currency, setCurrency] = useState("INR");

    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        else if (currency === "USD") setSymbol("$");
    }, [currency]);

    return(
        <Crypto.Provider value={{symbol, currency, setCurrency, setSymbol}}>
            {children}
        </Crypto.Provider>
    )
}

export default ContextApi;

export const CryptoState = () => {
    return useContext(Crypto);
};