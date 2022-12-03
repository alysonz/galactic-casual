import React from 'react';

const Gallery = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <h1>Design Gallery</h1>
    <h3>Inspirational</h3>
    <p>
      Beauty is a light in the heart.
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <img
        src="./images/beauty1.png"
        alt="inspiration beauty 1"
        style={{
          height: '200px',
          width: '200px',
          objectFit: 'cover',
          margin: '1rem',
        }}
      />
      <img
        src="./images/beauty2.png"
        alt="inspiration beauty 2"
        style={{
          height: '200px',
          width: '200px',
          objectFit: 'cover',
          margin: '1rem',
        }}
      />
      <img
        src="./images/beauty3.png"
        alt="inspiration beauty 3"
        style={{
          height: '200px',
          width: '200px',
          objectFit: 'cover',
          margin: '1rem',
        }}
      />
    </div>
    <p>
      Peace is found within oneself
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <img
        src="./images/peace1.png"
        alt="inspiration peace 1"
        style={{
          height: '200px',
          width: '200px',
          objectFit: 'cover',
          margin: '1rem',
        }}
      />
      <img
        src="./images/peace2.png"
        alt="inspiration peace 2"
        style={{
          height: '200px',
          width: '200px',
          objectFit: 'cover',
          margin: '1rem',
        }}
      />
    </div>
    <p>
      Hope is the foundation of courage
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <img
        src="./images/hope1.png"
        alt="inspiration hope 1"
        style={{
          height: '200px',
          width: '200px',
          objectFit: 'cover',
          margin: '1rem',
        }}
      />
      <img
        src="./images/hope2.png"
        alt="inspiration hope 2"
        style={{
          height: '200px',
          width: '200px',
          objectFit: 'cover',
          margin: '1rem',
        }}
      />
      <img
        src="./images/hope3.png"
        alt="inspiration hope 3"
        style={{
          height: '200px',
          width: '200px',
          objectFit: 'cover',
          margin: '1rem',
        }}
      />
    </div>
    <h3>T-Shirts</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ width: '300px' }}>
        <img
          src="./images/bass_shirt.png"
          alt="bass shirt"
          style={{
            height: '200px',
            width: '200px',
            objectFit: 'cover',
            margin: '1rem',
          }}
        />
        <p>
          This shirt is perfect for the avid fisherman. Whether you're out on the water or just hanging out with friends, this shirt is sure to start a conversation and showcase your love for bass fishing.
        </p>
      </div>
      <div style={{ width: '300px', margin: '0 1rem' }}>
        <img
          src="./images/poppin_bottles.png"
          alt="poppin bottles"
          style={{
            height: '200px',
            width: '200px',
            objectFit: 'cover',
            margin: '1rem',
          }}
        />
        <p>
          This adorable onesie is perfect for the baby who loves to party! The playful design features a bottle of milk with the words "Poppin' Bottles”. It's the perfect outfit for a special occasion, or just for showing off your baby's fun and lively personality.
        </p>
      </div>
      <div style={{ width: '300px', margin: '0 1rem' }}>
        <img
          src="./images/allergies.png"
          alt="allergies"
          style={{
            height: '200px',
            width: '200px',
            objectFit: 'cover',
            margin: '1rem',
          }}
        />
        <p>
          This shirt is the perfect way to let everyone know that you're not contagious - you're just allergic! The playful design is the perfect outfit for anyone who wants to spread some laughs and let people know that they don't need to worry about catching anything from you.
        </p>
      </div>
    </div>
  </div>
);


export default Gallery;