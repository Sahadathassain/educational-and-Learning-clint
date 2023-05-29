// import  { useState } from 'react';

// const ToyUpdateForm = ({ toyId, onUpdate }) => {
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [rating, setRating] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(toyId, price, quantity, rating);
//     // Reset the form fields after submitting
//     setPrice('');
//     setQuantity('');
//     setRating('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Price:
//         <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Quantity:
//         <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Rating:
//         <input type="number" step="0.1" value={rating} onChange={(e) => setRating(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Update</button>
//     </form>
//   );
// };

// export default ToyUpdateForm;
