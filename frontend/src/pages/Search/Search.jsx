import React, { useContext, useMemo, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Search.css';

export default function Search() {
  const { food_list } = useContext(StoreContext);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return (food_list || []).filter((item) =>
      (item.name || '').toLowerCase().includes(q)
    );
  }, [query, food_list]);

  return (
    <div className="search">
      <div className="search-box">
        <input
          type="text"
          value={query}
          placeholder="Search food..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="search-results">
        {query.trim() && filtered.length === 0 ? (
          <p className="search-empty">No results found.</p>
        ) : null}

        {filtered.map((item) => (
          <div key={item._id} className="search-result-item">
            <p className="search-result-name">{item.name}</p>
            <p className="search-result-price">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

