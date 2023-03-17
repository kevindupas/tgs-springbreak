/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
    useContext, useState, useEffect, createContext,
} from 'react';
import { SALON_ID, URL } from '../utils/config';
import useLocalStorage from '../utils/useLocalStorage';

const PostHomeContext = createContext();

export function PostHomeContextProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [storage, setStorage] = useLocalStorage('invitesHome', null);
    useEffect(() => {
        async function fetchData() {
            fetch(`${URL}/api/salon/${SALON_ID}/posts`)
                .then((response) => response.json())
                .then((json) => {
                    setPosts(json.data);
                    setStorage([json.data]);
                });
        }
        fetchData();
    }, []);
    return (
        <PostHomeContext.Provider
            value={{
                posts,
            }}
        >
            {children}
        </PostHomeContext.Provider>
    );
}

export function usePostHome() {
    const context = useContext(PostHomeContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}
