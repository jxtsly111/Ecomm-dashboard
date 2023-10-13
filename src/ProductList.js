import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function ProductList() {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "1000px",
        margin: "0 auto",
    };
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let result = await fetch("http://127.0.0.1:8000/api/list");
            result = await result.json();
            setData(result);
        };

        fetchData();
    }, []);

    console.warn("result", data);

    return (
        <>
            <Header />
            <div>
                <h1>Product List</h1>
                <div style={containerStyle}>
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
    );
}

export default ProductList
