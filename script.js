function generateQRCode() {
    const inputText = document.getElementById('inputText').value.trim();
  
    if (inputText === '') {
      alert('Please enter some text or a URL to generate a QR Code.');
      return;
    }
  
    const qrCodeContainer = document.getElementById('qrcode');
  

    qrCodeContainer.innerHTML = '';
  
  
    const qr = new QRious({
      element: document.createElement('canvas'), 
      value: inputText, 
      size: 200, 
    });
  
    qrCodeContainer.appendChild(qr.element);
  }
  