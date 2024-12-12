// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';  // Import DatePicker


// const FormExample = () => {
//   // State for form inputs
//   const [formData, setFormData] = useState({
//     fromDate: null,  // Initialize with null for date picker
//     toDate: null,    // Initialize with null for date picker
//     option: '',
//     username: '',
//     password: '',
//   });

//   // Handle input changes for other inputs (select, username, password)
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle date change
//   const handleDateChange = (date, field) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [field]: date,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simple form validation
//     if (!formData.fromDate || !formData.toDate || !formData.option || !formData.username || !formData.password) {
//       alert('Please fill out all fields.');
//       return;
//     }
    
//     // Handle form data submission logic here
//     console.log('Form Submitted:', formData);
//     alert('Form submitted successfully!');
//   };

//   return (
  
//   );
// };

// export default FormExample;
