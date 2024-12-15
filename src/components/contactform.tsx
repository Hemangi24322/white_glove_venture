
// import React, { useState } from "react";

// const Form: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     console.log("Submitting Data:", formData);

//     e.preventDefault();
//     try {
//       const response = await fetch("https://script.google.com/macros/s/AKfycbyif_Ht-eGXUO7nNuNzvJ3HmdVjC43ISJNAwEYHc-3cvM_TgmrzYENw5RWvA_5UcCRgVg/exec", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const result = await response.json();
//       console.log("Server Response:", result);
      
//       if (result.status === "success") {
//         alert("Data submitted successfully!");
//       } else {
//         alert("Failed to submit data!");
//       }
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       alert("An error occurred!");
//     }
//   };

//   return (
//     <form
//     onSubmit={handleSubmit}
//     style={{
//       maxWidth: "400px",
//       margin: "0 auto",
//       padding: "20px",
//       backgroundColor: "#f9f9f9",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     }}
//   >
//     <div style={{ marginBottom: "15px" }}>
//       <label
//         htmlFor="name"
//         style={{
//           display: "block",
//           fontSize: "14px",
//           marginBottom: "5px",
//           color: "#333",
//         }}
//       >
//         Name:
//       </label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//         style={{
//           width: "100%",
//           padding: "10px",
//           fontSize: "14px",
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//         }}
//       />
//     </div>
//     <div style={{ marginBottom: "15px" }}>
//       <label
//         htmlFor="email"
//         style={{
//           display: "block",
//           fontSize: "14px",
//           marginBottom: "5px",
//           color: "#333",
//         }}
//       >
//         Email:
//       </label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//         style={{
//           width: "100%",
//           padding: "10px",
//           fontSize: "14px",
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//         }}
//       />
//     </div>
//     <div style={{ marginBottom: "15px" }}>
//       <label
//         htmlFor="message"
//         style={{
//           display: "block",
//           fontSize: "14px",
//           marginBottom: "5px",
//           color: "#333",
//         }}
//       >
//         Message:
//       </label>
//       <textarea
//         id="message"
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         required
//         style={{
//           width: "100%",
//           padding: "10px",
//           fontSize: "14px",
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//           resize: "none",
//           height: "80px",
//         }}
//       ></textarea>
//     </div>
//     <button
//       type="submit"
//       style={{
//         display: "inline-block",
//         padding: "10px 15px",
//         fontSize: "16px",
//         color: "#fff",
//         backgroundColor: "#007bff",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer",
//         transition: "background-color 0.3s ease",
//       }}
//       onMouseOver={(e) =>
//         (e.currentTarget.style.backgroundColor = "#0056b3")
//       }
//       onMouseOut={(e) =>
//         (e.currentTarget.style.backgroundColor = "#007bff")
//       }
//     >
//       Submit
//     </button>
//   </form>
//   );
// };

// export default Form;


import React, { useState } from "react";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Update the specific field
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyif_Ht-eGXUO7nNuNzvJ3HmdVjC43ISJNAwEYHc-3cvM_TgmrzYENw5RWvA_5UcCRgVg/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      alert(result.status === "success" ? "Data submitted successfully!" : "Failed to submit data!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred. Check console for details.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Name Field */}
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="name"
          style={{
            display: "block",
            fontSize: "14px",
            marginBottom: "5px",
            color: "#333",
          }}
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name} // Controlled input
          onChange={handleChange} // Update state
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Email Field */}
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="email"
          style={{
            display: "block",
            fontSize: "14px",
            marginBottom: "5px",
            color: "#333",
          }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email} // Controlled input
          onChange={handleChange} // Update state
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Message Field */}
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="message"
          style={{
            display: "block",
            fontSize: "14px",
            marginBottom: "5px",
            color: "#333",
          }}
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message} // Controlled input
          onChange={handleChange} // Update state
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            resize: "none",
            height: "80px",
          }}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          display: "inline-block",
          padding: "10px 15px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "#0056b3")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "#007bff")
        }
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
