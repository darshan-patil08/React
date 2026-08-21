import { createContext } from "react";
import { useState } from "react";
//consumer
export const MyStore = createContext();

//provider

export const MyStoreProvider = ({children})=>{
    const [count, setCount] = useState(0)
    return (
        <MyStore.Provider value={{count, setCount}}>
            {children}
        </MyStore.Provider>
    )
}