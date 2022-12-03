import './App.css';
import ImageGallery from './components/gallery';

function App() {
  return (
    <div         
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <img
        src="./images/banner.png"
        alt="banner"
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 800,
          margin: '20px',
        }}
      >
        <h1>Galactic Casual</h1>
        <p>Designs, custom creations and curios for the known universe.</p>
      </div>
      <ImageGallery />
    </div>
  );
}

export default App;
