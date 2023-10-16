import Header from "./Header";
import { useState } from "react";
import { Table } from "react-bootstrap";
function SearchProduct() {

    const [data, setData]=useState([])

    async function search(key) {
        console.warn(key)

        let result = await fetch("http://127.0.0.1:8000/api/search/"+key);
        result = await result.json();
        setData(result)
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
            Search Product
        </h1>
        <br />
        <div style={containerStyle}>
        <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" style={inputStyle} placeholder="Search Product" /><br />

        <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img style={{ width: 80 }} src={"http://127.0.0.1:8000/" + item.file_path}></img></td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
        </div>
       
        </div>
        </>
        
    )
}

export default SearchProduct