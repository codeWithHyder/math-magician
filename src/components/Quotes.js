import React, { useState, useEffect } from 'react';
import apiKey from './APIkey';

const Quotes = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=education', {
          headers: { 'X-Api-Key': apiKey },
        });
        const res = await response.json();
        setData(res[0]);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <>
      <p id="par">hello</p>
      <ul className="quotes" data-testid="quotes">
        {data && (
        <p>
          {data.quote}
          {' '}
          <span>
            ~
            {data.author}
          </span>
        </p>
        )}
      </ul>
    </>
  );
};

export default Quotes;
