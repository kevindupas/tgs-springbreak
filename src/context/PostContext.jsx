/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
    useContext, useState, useEffect, createContext,
} from 'react';
import { SALON_ID, URL } from '../utils/config';
import useLocalStorage from '../utils/useLocalStorage';

const PostContext = createContext();

export function PostContextProvider({ children }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const options = {
            method:  'GET',
            mode:    'cors',
            cache:   'default',
            headers: {
                Accept:         'application/json',
                'Content-Type': 'application/json',
            },
        };

        fetch(`${URL}/api/posts/categories/1/salon/${SALON_ID}}`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPosts(data.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    return (
        <PostContext.Provider
            value={{
                posts,
                error,
                isLoaded,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

export function useInvites() {
    const context = useContext(PostContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}
