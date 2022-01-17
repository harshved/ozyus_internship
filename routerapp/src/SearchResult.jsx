import React from "react";

const SearchResult = (props) => {
    const img = `https://source.unsplash.com/400x300/?${props.name}`
    return (
        <>
            <div className="img-div">
                <img src={img} alt="Searched Image" />
            </div>
        </>
    )
}
export default SearchResult;