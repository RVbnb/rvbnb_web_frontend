import React, { useEffect, useState } from "react";
import axiosWithAuth from "./utilities/axiosWithAuth";

export default function Owner() {
    const [filtered, setFiltered] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        axiosWithAuth()
            .get('https://rvbnb.herokuapp.com/api/listings/', query)
            .then(res => {
                const data = res.data.filter(data =>
                    data.location.toLowerCase().includes(query.toLowerCase())
                )
                //console.log("query", res)
                setFiltered(data)
            })




    }, [query]);

    const handleInputChange = event => {
        setQuery(event.target.value);
    };
    return (
        <div>
            <form>
                <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Search Location"
                    value={query}
                    name="location" tabIndex="0"
                    className="prompt-search-name" />

            </form>
        </div>

    )
}