import React from "react";
import styles from "../stylesheets/Listings.module.css";
import PropCard from "./PropCard";
import { useState } from "react";

const propertyData = [
  {
    image: "https://via.placeholder.com/150",
    bedrooms: 5,
    bathrooms: 4,
    address: "707 Birch Court, Parkside, MI",
  },
  {
    image: "https://via.placeholder.com/150",
    bedrooms: 2,
    bathrooms: 1,
    address: "808 Cedar Way, Brookhaven, GA",
  },
  {
    image: "https://via.placeholder.com/150",
    bedrooms: 3,
    bathrooms: 2,
    address: "909 Elm Crescent, Riverdale, VA",
  },
  {
    image: "https://via.placeholder.com/150",
    bedrooms: 4,
    bathrooms: 2,
    address: "1010 Oak Street, Garden City, AZ",
  },
  {
    image: "https://via.placeholder.com/150",
    bedrooms: 2,
    bathrooms: 1,
    address: "1111 Pine Lane, Crestview, TN",
  },
  {
    image: "https://via.placeholder.com/150",
    bedrooms: 5,
    bathrooms: 4,
    address: "1212 Birch Drive, Southridge, IL",
  },
  {
    image: "https://via.placeholder.com/150",
    bedrooms: 3,
    bathrooms: 3,
    address: "1313 Cedar Court, Willow Creek, TX",
  },
  {
    image: "https://via.placeholder.com/150",
    bedrooms: 4,
    bathrooms: 2,
    address: "1414 Elm Road, Stonebridge, FL",
  },
  {
    image: "https://via.placeholder.com/150",
    bedrooms: 2,
    bathrooms: 2,
    address: "1515 Oak Terrace, Harborview, CA",
  },
];
export default function Listings() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(propertyData.length / itemsPerPage);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === "next") {
        return Math.min(prevPage + 1, totalPages);
      } else if (direction === "prev") {
        return Math.max(prevPage - 1, 1);
      }
      return prevPage;
    });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = propertyData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h4>Featured Properties</h4>
      </div>
      <div>
        <div className={styles.items}>
          {currentItems.map((property, index) => (
            <div className={styles.item} key={index}>
              <PropCard
                image={property.image}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                address={property.address}
              />
            </div>
          ))}
        </div>
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
