/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, {
    createContext, useContext, useEffect, useState,
} from 'react';
import { SALON_ID, URL } from '../utils/config';

const APIContext = createContext();

export function APIContextProvider({ children }) {
    const [settings, setSettings] = useState([]);
    // const [storage, setStorage] = useLocalStorage('settings', null);
    useEffect(() => {
        async function fetchData() {
            fetch(`${URL}/api/salon/${SALON_ID}`)
                .then((response) => response.json())
                .then((json) => {
                    setSettings([json.data]);
                });
        }

        fetchData()
            .then((r) => r.response);
    }, []);
    return (
        <APIContext.Provider
            value={{
                settings,
            }}
        >
            {children}
        </APIContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}
