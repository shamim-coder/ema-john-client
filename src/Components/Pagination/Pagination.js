import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Pagination.css";

const Pagination = ({ setProducts }) => {
    const [pageNumber, setPageNumber] = useState();
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);

    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, [page, setProducts, size]);

    useEffect(() => {
        fetch("http://localhost:5000/nop")
            .then((res) => res.json())
            .then((data) => {
                const numberOfPage = data.count / size;
                setPageNumber(Math.ceil(numberOfPage));
            });
    }, [size]);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <nav>
                    <ul className="pagination ema-pagination">
                        <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
                            <button onClick={() => setPage(page - 1)} className="page-link">
                                Previous
                            </button>
                        </li>
                        {[...Array(pageNumber).keys()].map((number) => (
                            <li key={number} className={`page-item ${page === number ? "page-active" : ""}`}>
                                <button onClick={() => setPage(number)} className="page-link bg-transparent text-none">
                                    {number + 1}
                                </button>
                            </li>
                        ))}

                        <li className="page-item">
                            <button onClick={() => setPage(page + 1)} className="page-link">
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="page-item d-flex align-items-center gap-2">
                    Number of Item
                    <select className="page-link" onChange={(e) => setSize(e.target.value)} name="page" id="page">
                        <option defaultValue="6">6</option>
                        <option value="9">9</option>
                        <option value="15">15</option>
                        <option value="21">21</option>
                    </select>
                </div>
            </div>
            {/* <ul>
                {product.map((pro) => (
                    <li>{pro.name}</li>
                ))}
            </ul> */}
        </>
    );
};

export default Pagination;
