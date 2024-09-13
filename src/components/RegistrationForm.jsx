import React from "react";
import "../styles/RegistrationForm.css";

const RegistrationForm = () => {
  return (
    <div className="form-container" id="registration">
      <h2>Hey There, Welcome!</h2>
      <form>
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input type="text" id="eventName" name="eventName" required />
        </div>

        <div className="form-group">
          <label htmlFor="playerName">Name of Player:</label>
          <input type="text" id="playerName" name="playerName" required />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" required />
        </div>

        <div className="form-group">
          <label htmlFor="fatherName">Father’s Name:</label>
          <input type="text" id="fatherName" name="fatherName" required />
        </div>

        <div className="form-group">
          <label htmlFor="motherName">Mother’s Name:</label>
          <input type="text" id="motherName" name="motherName" required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="schoolName">School Name:</label>
          <input type="text" id="schoolName" name="schoolName" required />
        </div>

        <div className="form-group">
          <label htmlFor="academyName">Academy Name:</label>
          <input type="text" id="academyName" name="academyName" required />
        </div>

        <div className="form-group">
          <label htmlFor="paymentLink">Pay Fee:</label>
          <input
            type="url"
            id="paymentLink"
            name="paymentLink"
            placeholder="Payment link"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
