import { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-div">
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="How can I help you ?"
          value={formData.message}
          onChange={handleChange}
        />
      </div>


      <button type="submit" className="contact-div">
        <img src="/ellipse.png" alt="ellipse" className="ellipse-abs" />
        Click to send
        <img src="/arrow.png" alt="arrow" className="arrowImg" />
      </button>
    </form>
  );
}

export default Form;
