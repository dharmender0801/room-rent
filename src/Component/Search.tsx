import React, { useEffect, useState } from "react";
import Image from '../assets/download.jpeg';
import { ModelType, modelData } from "../Service/Model";
import { APICALL } from "../API-COM/ApiCall";
const SearchComp = () => {
    const [priceRange, setPriceRange] = useState(3000);
    const [contentList, setContentList] = useState(modelData);
    const [pageData, setPageData] = useState(ModelType.pagable)
    const [data, setData] = useState(ModelType.Data);

    const handlePriceRangeChange = (event: any) => {
        setPriceRange(event.target.value); // Update the price range value
    };

    const truncateText = (text: any, limit: any) => {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };

    const getPageData = () => {
        console.log(JSON.stringify(pageData));
        APICALL.getPageData(pageData).then((res) => {
            console.log(res.data);
    
            setData(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        setPageData(prevPageData => ({
            ...prevPageData,
            pageNumber: 0,
            pageSize: 3,
            sort: "ASC",
        }));
        getPageData();
    }, [])

    return (
        <div className="search-container">
            <div className="left-container">
                <div className="filter-section">
                    <div className="filter-options gap-20-btm">
                        <div className="price-filter gap-20-btm">
                            <h3>Price Filter</h3>
                            <label>Price Range:</label>
                            <input
                                type="range"
                                min="3000"
                                max="100000"
                                value={priceRange}
                                onChange={handlePriceRangeChange}
                            />
                            <input
                                type="text"
                                value={priceRange}
                                onChange={handlePriceRangeChange}
                                className="price-input"
                            />
                        </div>
                        <div className="order-by gap-20-btm">
                            {/* <h3>Sort</h3> */}
                            <label>Sort By:</label>
                            <select>
                                <option value="default">Default</option>
                                <option value="price-low-to-high">Price Low to High</option>
                                <option value="price-high-to-low">Price High to Low</option>
                            </select>
                        </div>
                        <div className="location-filter gap-20-btm">
                            {/* <h3>Location Filter</h3> */}
                            <label>
                                <i className="fas fa-map-marker-alt"></i>
                                Location:</label>
                            <input type="text" placeholder="Enter location" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-container text-center">

                {
                    data.map((item) => {
                        console.log(item)
                        return (
                            <>
                                <div className="card">
                                    <div className="custom-card-content">
                                        <div className="custom-left-side">
                                            <img src={Image} alt="Image Description" />

                                        </div>
                                        <div className="custom-right-side">
                                            <label>{
                                                truncateText(item.title, 8)
                                            }</label>
                                            <div className="location-apartmentname  d-flex text-center sps-btn">
                                                <span>{item.apartmentName}</span>
                                                <div className="d-flex g-5">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <span>{item.location}</span></div>

                                            </div>
                                            <div className="custom-price-details">
                                                <div className="price-container d-flex sps-btn">
                                                    <span>{item.price}/{item.rentType}</span>
                                                    <span>{item.area}.{item.areaIn}</span>
                                                    <span>{item.bhk}</span>
                                                </div>
                                            </div>
                                            <p>{truncateText(item.description, 20)}</p>
                                        </div>
                                    </div>
                                    <div className="contact-container d-flex">
                                        <div className="contact-left">
                                            <h3>{item.ownerName}</h3>
                                        </div>
                                        <div className="contact-right  justify-center g-20">
                                            <button className="bg-blue btn">View Phone number</button>
                                            <button className="bg-blue btn">Contact</button>
                                        </div>

                                    </div>
                                </div>
                            </>

                        )
                    })
                }


                {/* {
                    contentList.map((item) => {
                        return (
                            <>
                                <div className="card">
                                    <div className="custom-card-content">
                                        <div className="custom-left-side">
                                            <img src={Image} alt="Image Description" />

                                        </div>
                                        <div className="custom-right-side">
                                            <label>{
                                                truncateText(item.title, 8)
                                            }</label>
                                            <div className="location-apartmentname  d-flex text-center sps-btn">
                                                <span>{item.apartmentName}</span>
                                                <div className="d-flex g-5">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <span>{item.location}</span></div>

                                            </div>
                                            <div className="custom-price-details">
                                                <div className="price-container d-flex sps-btn">
                                                    <span>{item.price}/{item.rentType}</span>
                                                    <span>{item.area}.{item.areaIn}</span>
                                                    <span>{item.bhk}</span>
                                                </div>
                                            </div>
                                            <p>{truncateText(item.description, 20)}</p>
                                        </div>
                                    </div>
                                    <div className="contact-container d-flex">
                                        <div className="contact-left">
                                            <h3>{item.ownerName}</h3>
                                        </div>
                                        <div className="contact-right  justify-center g-20">
                                            <button className="bg-blue btn">View Phone number</button>
                                            <button className="bg-blue btn">Contact</button>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    })
                } */}



                {/* <div className="card">
                    <div className="custom-card-content">
                        <div className="custom-left-side">
                            <img src={Image} alt="Image Description" />
                        </div>
                        <div className="custom-right-side">
                            <h2>Title</h2>
                            <div className="custom-price-details">
                                <span>Price</span>
                                <span>1BHK</span>
                            </div>
                            <p>Description goes here...</p>
                        </div>
                    </div>
                </div> */}

            </div>
            <div className="right-container justify-center">
                other Part
            </div>
        </div>
    )
}
export default SearchComp;