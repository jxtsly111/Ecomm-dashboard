import Header from "./Header";
import { useState } from "react";
function AddProduct() {
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    function addProduct() {
        console.warn(name,file,price,description)
    }

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
                AddProduct 
            </h1>
            <div style={containerStyle}>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                    placeholder="name"
                />
                <br />
                <input
                    type="file"
                    className="form-control"
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                    style={inputStyle}
                    placeholder="file"
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    style={inputStyle}
                    placeholder="price"
                />
                <br />

                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={inputStyle}
                    placeholder="description"
                />
                <br />
                <button onClick={addProduct} className="btn btn-primary">
                    Add Product
                </button>
            </div>
        </div>
        </>
        
    )
}

export default AddProduct