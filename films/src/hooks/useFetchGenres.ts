import { useEffect, useContext, useState } from "react";
import { FILTER_TYPES } from "../reducer/types";
import { FiltersDispatch } from "../context/filterContext";
import { API } from "../utils/defaultValues";
import Cookies from "js-cookie";

export function useFetchGenres() {
    const filtersDispatch = useContext(FiltersDispatch)
    const token = Cookies.get('token')
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if(token) {
            const fetchData = async () => {
                try {
                setIsLoading(true);
        
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                };
        
                const response = await fetch(API.GENRES, options);
                const data = await response.json();
        
                filtersDispatch({ type: FILTER_TYPES.GENRES_FETCHED, payload: data.genres });
                setIsLoading(false);
                } catch (error) {
                    console.error(error);
                    setIsLoading(false);
                }
            };
        
            fetchData();
        }
        }, [filtersDispatch, token]);
            
        return isLoading;
}



