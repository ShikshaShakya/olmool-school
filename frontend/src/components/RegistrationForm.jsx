import React, { useState } from "react";
import "../styles/RegistrationForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();

  async function onSubmit(values) {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/user/register`,
        values
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container" id="registration">
      <h2>Hey There, Welcome!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            required
            {...register("eventName")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name of Player:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            {...register("name")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            required
            {...register("dob")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fatherName">Father’s Name:</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            required
            {...register("fatherName")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="motherName">Mother’s Name:</label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            required
            {...register("motherName")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            {...register("address")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            {...register("email")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="schoolName">School Name:</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            required
            {...register("schoolName")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="academyName">Academy Name:</label>
          <input
            type="text"
            id="academyName"
            name="academyName"
            required
            {...register("academyName")}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="paymentLink">Pay Fee:</label>
          <input
            type="url"
            id="paymentLink"
            name="paymentLink"
            placeholder="Payment link"
            required
          />
        </div> */}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
