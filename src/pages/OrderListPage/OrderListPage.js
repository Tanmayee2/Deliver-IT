import React from 'react';

const Box = ({ image, title, subtitle, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', width: '200px' }}>
      <img src={image} alt="Box" style={{ maxWidth: '100%', height: 'auto' }} />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </div>
  );
};

const OrderListPage = () => {
  const boxes = [
    {
      image: 'image1.jpg',
      title: 'Box 1',
      subtitle: 'Subtitle 1',
      description: 'Description 1',
    },
    {
      image: 'image2.jpg',
      title: 'Box 2',
      subtitle: 'Subtitle 2',
      description: 'Description 2',
    },
    {
      image: 'image3.jpg',
      title: 'Box 3',
      subtitle: 'Subtitle 3',
      description: 'Description 3',
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {boxes.map((box, index) => (
        <Box key={index} {...box} />
      ))}
    </div>
  );
};

export default OrderListPage;