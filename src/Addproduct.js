import Header from "./Header";
function AddProduct() {
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
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                    placeholder="name"
                />
                <br />
                <input
                    type="file"
                    className="form-control"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                    placeholder="file"
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    placeholder="price"
                />
                <br />

                <input
                    type="text"
                    className="form-control"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    placeholder="description"
                />
                <br />
                <button className="btn btn-primary">
                    Add Product
                </button>
            </div>
        </div>
        </>
        
    )
}

export default AddProduct