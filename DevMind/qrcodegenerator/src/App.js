import { useState } from 'react';
import './App.css';
import QRCode from "qrcode";
function App() {
  const [url, setUrl] = useState("");
  const [dataUrl, setDataUrl] = useState("");

  const handleQRCodeGeneration = (e) => {
    e.preventDefault();
    QRCode.toDataURL(url, { width: 300 }, (err, dataUrl) => {
      if (err) console.error(err);

      // set dataUrl state to dataUrl
      setDataUrl(dataUrl);
    });
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>

      <form onSubmit={handleQRCodeGeneration}>
        <div className='input-fields'>
          <input
            required
            type="url"
            placeholder="Enter a valid URL"
            className='url-ip'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input type="submit" value="Generate" className='submit' />
        </div>
      </form>

      {dataUrl && (
        <div className="generated-view">
          <img src={dataUrl} alt="qr code" />
        </div>
      )}
    </div>
  );
}

export default App;
