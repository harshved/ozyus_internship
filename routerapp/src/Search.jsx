import React, {useState} from "react";
import SearchResult from "./SearchResult";

const Search = () => {
    const [img, setImg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
        console.log(data);
    }
    return(
        <>
            <div className="searchbar">
                <input type="text" placeholder="Search Here" value={img} onChange={inputEvent}/>
            </div>
            {img === "" ? null : <SearchResult name={img}/>}
        </>
    )
}
export default Search;