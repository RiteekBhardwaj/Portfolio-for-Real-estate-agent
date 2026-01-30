import React, { useState } from "react";
import axios from "axios";
import styles from "../stylesheets/Contact.module.css";
import contactimg from "../pictures/contactimg.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    buyOrSell: "buy",
    message: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:8080/api/contactrequests",
        formData
      );
      setSuccess("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        buyOrSell: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <img src={contactimg} alt="Contact" />
      </div>
      <div className={styles.right}>
        <div className={styles.heading}>
          <h4>Ready to Get Started</h4>
          <p>Get in Touch</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="buyOrSell"
            value={formData.buyOrSell}
            onChange={handleChange}
          >
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
          <textarea
            name="message"
            id="message-box"
            className={styles.message}
            placeholder="Type Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}
