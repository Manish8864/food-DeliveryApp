import React, { useContext, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './FoodDetails.css';
import { StoreContext } from '../../context/StoreContext';

export default function FoodDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { food_list, url } = useContext(StoreContext);

  const item = useMemo(() => {
    return (food_list || []).find((x) => String(x._id) === String(id));
  }, [food_list, id]);

  if (!item) {
    return (
      <div className="food-details">
        <button className="food-details-back" onClick={() => navigate('/search')}>
          Back to Search
        </button>
        <p className="food-details-empty">Food not found.</p>
      </div>
    );
  }

  return (
    <div className="food-details">
      <button className="food-details-back" onClick={() => navigate('/search')}>
        Back to Search
      </button>

      <div className="food-details-card">
        <img
          className="food-details-image"
          src={`${url}/images/${item.image}`}
          alt={item.name}
        />

        <div className="food-details-info">
          <h2 className="food-details-title">{item.name}</h2>
          <p className="food-details-price">₹{item.price}</p>
          <p className="food-details-desc">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

