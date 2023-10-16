import Header from "./Header";
import { useState } from "react";
function SearchProduct() {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "500px",
        margin: "0 auto",
    };

    const inputStyle = {
        marginBottom: "10px",
    };
    return(
        <>
        <Header />
        <div>
        <h1>
            Search Product
        </h1>
        </div>
        </>
        
    )
}

export default SearchProduct