/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
    useContext, useState, useEffect, createContext,
} from 'react';
import { URL } from '../utils/config';
// import useLocalStorage from '../utils/useLocalStorage';

const PostDetailContext = createContext();

export function PostDetailContextProvider({ children, postId }) {
    const [details, setDetails] = useState({});
    // const [storage, setStorage] = useLocalStorage('settings', null);
    useEffect(() => {
        async function fetchData() {
            const options = { method: 'GET' };
            fetch(`${URL}/api/post/${postId}`, options)
                .then((response) => response.json())
                .then((response) => setDetails(response.data))
                .catch((err) => console.error(err));
        }
        fetchData();
    }, []);
    return (
        <PostDetailContext.Provider
            value={{
                details,
                postId,
            }}
        >
            {children}
        </PostDetailContext.Provider>
    );
}

export function usePostDetail() {
    const context = useContext(PostDetailContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}
