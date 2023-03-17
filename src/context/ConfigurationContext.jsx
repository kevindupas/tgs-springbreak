/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, {
    useContext, useState, useEffect, createContext,
} from 'react';
import { SALON_ID, URL } from '../utils/config';
import useLocalStorage from '../utils/useLocalStorage';

const ConfigurationContext = createContext();

function ConfigurationProvider({ children }) {
    const [configStorage, setConfigStorage] = useLocalStorage('config', null);
    const [config, setConfig] = useState(configStorage);

    const refreshConfig = () => {
        const options = {
            method:  'GET',
            mode:    'cors',
            cache:   'default',
            headers: {
                Accept:         'application/json',
                'Content-Type': 'application/json',
            },
        };

        fetch(`${URL}/api/salon/${SALON_ID}`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setConfigStorage(data.data);
                    setConfig(data.data);
                },
            )
            .catch((error) => {
                throw error.response;
            });
    };

    useEffect(() => {
        if (configStorage === null) {
            refreshConfig();
        } else {
            const options = {
                method:  'GET',
                mode:    'cors',
                cache:   'default',
                headers: {
                    Accept:         'application/json',
                    'Content-Type': 'application/json',
                },
            };

            fetch(`${URL}/api/salon/${SALON_ID}/last_update`, options)
                .then((res) => res.json())
                .then(
                    (data) => {
                        if (data.data.updated_at > (configStorage.updated_at ?? null)) {
                            refreshConfig();
                        }
                    },
                )
                .catch((error) => {
                    throw error.response;
                });
        }
    }, []);
    return (
        <ConfigurationContext.Provider
            value={{
                config,
                refreshConfig,
            }}
        >
            {children}
        </ConfigurationContext.Provider>
    );
}

export { ConfigurationContext, ConfigurationProvider };

export function useSettings() {
    const context = useContext(ConfigurationContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}
