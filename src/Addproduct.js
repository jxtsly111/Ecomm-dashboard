import Header from "./Header";
import { useState } from "react";
function AddProduct() {
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    async function addProduct() {
        console.warn(name,file,price,description)
        const formData = new FormData();
        formData.append('file',file);
        formData.append('price',price);
        formData.append('name',name);
        formData.append('description',description);
        let result = await fetch("http://127.0.0.1:8000/api/addProduct",{
            method:'POST',
            body:formData
        });
        alert("Data has been saved")
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
                    
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                    placeholder="name"
                />
                <br />
                <input
                    type="file"
                    className="form-control"
                    
                    onChange={(e) => setFile(e.target.files[0])}
                    style={inputStyle}
                    placeholder="file"
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    
                    onChange={(e) => setPrice(e.target.value)}
                    style={inputStyle}
                    placeholder="price"
                />
                <br />

                <input
                    type="text"
                    className="form-control"
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