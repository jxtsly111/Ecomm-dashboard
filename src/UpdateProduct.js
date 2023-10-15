import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

function UpdateProduct() {
    const { id } = useParams();
    const [data, setData] = useState({ name: "" }); // Initialize data state

    console.warn("props", id);

    useEffect(() => {
        // Use a separate function to fetch the data
        async function fetchData() {
            try {
                const result = await fetch(`http://127.0.0.1:8000/api/product/${id}`);
                const data = await result.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData(); // Call the fetchData function
    }, [id]); // Add 'id' to the dependency array to rerun the effect when 'id' changes

    return (
        <>
            <Header />
            <div>
                <h1>UpdateProduct</h1>
                <input type="text" defaultValue={data.name} /> <br /> <br />
                <input type="text" defaultValue={data.price} /> <br /> <br />
                <input type="text" defaultValue={data.description} /> <br /> <br />
                <input type="file" defaultValue={data.file_path} /> <br /> <br />
                <img style={{width:100}} src={"http://127.0.0.1:8000/"+ data.file_path} /><br /> <br />
                <button>Update Product</button>
            </div>
        </>
    );
}

export default UpdateProduct;
