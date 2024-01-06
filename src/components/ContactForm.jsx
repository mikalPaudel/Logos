// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// const ContactForm = () => {
//     const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Check if any form field is empty
//     if (!formData.name || !formData.email || !formData.message) {
//         alert('Please fill in all fields before submitting.');
//         return;
//       }
//     try {
//       // Your form submission logic here
  
//       console.log('Form submitted:', formData);
  
//     //  // Assuming you want to clear the form after submission
//     //  setFormData({
//     //     name: '',
//     //     email: '',
//     //     message: '',
//     //   });

//         // Redirect to Contacts page
//         navigate('/contacts');

//     } catch (error) {
//       console.error('Form submission error:', error);
//       // Handle error and display a message to the user
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <form action="https://formspree.io/f/xjvnvggq" method="POST" onSubmit={handleSubmit}>
//         <div className='contact-form'>
//             <label>
//             Name:
//             <input type="text" name="name" value={formData.name} onChange={handleChange} />
//             </label>   
//         </div>
//      <div className='contact-form'>
//        <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label> 
//      </div>
//       <div className='contact-form'>
//         <label>
//         Message:
//         <textarea name="message" value={formData.message} onChange={handleChange} />
//       </label>
//       </div>
      
//     <div><button type="submit">Contact Us</button></div>  
//     </form>
//   );
// };

// export default ContactForm;
