import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Maincontent = () => {
  const data = useLoaderData();
  console.log(data);

  // Check if data exists and has the expected structure
  if (!data || !data.data || !Array.isArray(data.data)) {
    return ;
  }

  return (
    <>
    
    <div className='grid col-span-6  grid-cols-1 md:grid-cols-2  w-full  '>
      
      
     
      {data.data.map((news) => (

<NewsCard key={news._id} data={news}></NewsCard>
  

))}
      
    </div>
    </>
  );
};

export default Maincontent;