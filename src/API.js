import React from 'react'

const API = () => {
    
    const GetData = async (setData, setLoading) => {
        try {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await response.json();
            console.log(json);
            setData(json);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log("error in api", error)
        }
    }

    return {GetData}
}

export default API;