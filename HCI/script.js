function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user && pass) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("infoForm").style.display = "block";
  } else {
    alert("Please enter username and password!");
  }
}

function generateQR() {
  const name = document.getElementById("fullname").value;
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;
  const emergency = document.getElementById("emergency").value;
  const phone = document.getElementById("phone").value;
  const facebook = document.getElementById("facebook").value;

  if(name && age && address && emergency && phone) {
    let info = `Name: ${name}\nAge: ${age}\nAddress: ${address}\nEmergency Contact: ${emergency}\nPhone: ${phone}`;
    if(facebook) {
      info += `\nFacebook: ${facebook}`;
    }

    document.getElementById("infoForm").style.display = "none";
    document.getElementById("qrSection").style.display = "block";

    new QRCode(document.getElementById("qrcode"), {
      text: info,
      width: 200,
      height: 200
    });
  } else {
    alert("Please fill out all required fields!");
  }
}

function downloadQR() {
  const qrCanvas = document.querySelector('#qrcode canvas');
  if(qrCanvas) {
    const link = document.createElement('a');
    link.download = 'emergency_qrcode.png';
    link.href = qrCanvas.toDataURL();
    link.click();
  }
}
