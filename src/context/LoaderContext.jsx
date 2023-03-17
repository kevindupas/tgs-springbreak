import React, {
    createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import Loader from '../components/Loader';
import { ConfigurationContext } from './ConfigurationContext';

const LoaderContext = createContext();

function LoaderProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const { config } = useContext(ConfigurationContext);

    useEffect(() => {
        setIsLoading(config === null);
    }, [config]);
    const providedValues = useMemo(() => ({ isLoading }), [isLoading]);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <LoaderContext.Provider value={providedValues}>
            {children}
        </LoaderContext.Provider>
    );
}

export { LoaderContext, LoaderProvider };
