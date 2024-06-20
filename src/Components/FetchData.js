import React, { useState, useEffect } from "react";

import axios from "axios";

const FetchData = ({ cat }) => {
  const [data, setData] = useState([]); // Initialize as an empty array

  const fetchData = () => {
    axios
      .get(
        cat
          ? "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=36a99f45e9f54d24b48b530d946930d3"
          : "https://newsapi.org/v2/top-headlines?country=in&category=business&${cat}&apiKey=36a99f45e9f54d24b48b530d946930d3"
      )
      .then((res) => setData(res.data.articles))
      .catch((error) => console.error("Error fetching data", error));
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className="container my-4">
      <h3>
        <u>TOP HEADLINE</u>
      </h3>
      <div
        className="container d-flex justify-content-center align-item-center flex-column my-3"
        style={{ minHeight: "100vh" }}
      >
        {data.length > 0
          ? data.map((item, index) => (
              <div key={index}>
                <div
                  className="container my-3 p-3"
                  style={{
                    width: "600px",
                    boxShadow: "2px 2px 10px silver",
                    borderRadius: "10px",
                  }}
                >
                  <h5 className="my-2">{item.title}</h5>
                  <div className="d-flex justify-content-center align-item-center">
                    <img
                      src={item.urlToImage}
                      alt="Img not found"
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="my-1">{item.content}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    View more
                  </a>
                </div>
              </div>
            ))
          : "loading...."}
      </div>
    </div>
  );
};

export default FetchData;
