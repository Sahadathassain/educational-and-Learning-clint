import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://educational-and-learning-server-sahadathassain.vercel.app/allData/${id}`);
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
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-8">
      <h1 className="text-2xl font-bold mb-4">{details.toyName}</h1>
      <img src={details.toyPhoto} alt="Toy" className="w-full mb-4" />
      <p className="mb-2">
        Seller: <span className="font-bold">{details.sellerName}</span>
      </p>
      <p className="mb-2">
        Email: <span className="font-bold">{details.sellerEmail}</span>
      </p>
      <p className="mb-2">
        Price: <span className="font-bold">{details.price}</span>
      </p>
      <p className="mb-2">
        Rating: <span className="font-bold">{details.toyRating}</span>
      </p>
      <p className="mb-2">
        Available Quantity: <span className="font-bold">{details.availableQuantity}</span>
      </p>
      <p className="mb-2">
        Description: <span className="font-bold">{details.detailDescription}</span>
      </p>
    </div>
  );
};

export default ViewDetails;
