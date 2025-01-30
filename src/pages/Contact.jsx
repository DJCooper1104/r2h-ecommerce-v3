// // Importing the React library and useState hook for managing component state
// import React, { useState } from "react";

// // Functional component definition for the Contact form
// const Contact = () => {
//   // useState hook to manage form data as a state object with name, email, and message fields
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // Handler function to update the state when form inputs change
//   const handleChange = (e) => {
//     // Using spread syntax to retain previous state and updating the changed field
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handler function to manage form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents the default form submission behavior (page reload)
//     console.log("Form Submitted", formData); // Logs the form data to the console
//     // Placeholder for form submission logic, such as making an API call
//   };

//   // JSX for rendering the contact form
//   return (
//     <section className="contact-section">
//       {/* Form element with an onSubmit handler */}
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <h2>Contact Us</h2> {/* Form title */}
//         {/* Name input field */}
//         <div className="form-group">
//           <label htmlFor="name">Name</label> {/* Label for accessibility */}
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your name"
//             required // Marks the field as mandatory
//             value={formData.name} // Binds the input value to the component state
//             onChange={handleChange} // Updates the state on input change
//           />
//         </div>
//         {/* Email input field */}
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         {/* Message textarea */}
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Enter your message"
//             required
//             value={formData.message}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         {/* Submit button */}
//         <button type="submit" className="submit-btn">
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// };

// // Exporting the Contact component for use in other parts of the application
// export default Contact;

// Importing the React library and useState hook for managing component state
import React, { useState } from "react";

// Functional component definition for the Contact form
const Contact = () => {
  // useState hook to manage form data as a state object with name, email, and message fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handler function to update the state when form inputs change
  const handleChange = (e) => {
    // Using spread syntax to retain previous state and updating the changed field
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handler function to manage form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)

    // Trim inputs to remove leading/trailing spaces
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    // Basic validation checks
    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(trimmedData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Form Submitted", trimmedData); // Logs the form data to the console

    // Show success alert
    alert(`Thank you, ${trimmedData.name}! Your message has been sent.`);

    // Clear the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  // JSX for rendering the contact form
  return (
    <section className="contact-section">
      {/* Form element with an onSubmit handler */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2> {/* Form title */}
        {/* Name input field */}
        <div className="form-group">
          <label htmlFor="name">Name</label> {/* Label for accessibility */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required // Marks the field as mandatory
            value={formData.name} // Binds the input value to the component state
            onChange={handleChange} // Updates the state on input change
          />
        </div>
        {/* Email input field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Message textarea */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Submit button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

// Exporting the Contact component for use in other parts of the application
export default Contact;
