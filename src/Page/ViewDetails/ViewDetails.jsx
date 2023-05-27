import  { useState, useEffect } from 'react';

const ViewDetails = ({ id }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/allData/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch document details');
        }
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error('Error fetching document details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{details.toyName}</h1>
      <img src={details.picture} alt="Toy" />
      <p>Seller: {details.sellerName}</p>
      <p>Email: {details.sellerEmail}</p>
      <p>Price: {details.price}</p>
      <p>Rating: {details.rating}</p>
      <p>Available Quantity: {details.quantity}</p>
      <p>Description: {details.description}</p>
    </div>
  );
};

export default ViewDetails;
