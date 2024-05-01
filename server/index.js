const express = require("express");
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const port = '8000';
const cors = require('cors');
const corsConfig = {
  origin: '*',
  credential: true, 
  methods: ["GET", "POST","DELETE","PATCH","PUT","OPTIONS"]
}
app.use(cors(corsConfig));
// Configure nodemailer transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rushabhramani16@gmail.com',
    pass: 'fkoc afsw zcli psue' // Replace with your actual password or use environment variables
  }
});
// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Define a route to handle the form data
app.post('/get-form-data', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  res.status(200).json({ message:'Form data received successfully' });
  const { name , email , phone ,request} = req.body;
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Client Details</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    body {
      font-family: 'Poppins', sans-serif;
      background-color: #f5f5f5;
      color: #333;
      display: flex;
      min-height: 100vh;
      margin: 0;
    }

    .container {
      background-color: #fff;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      max-width: 500px;
      width: 100%;
    }

    h1 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 2rem;
    }

    p {
      margin: 1rem 0;
      font-size: 1.1rem;
    }

    .phone-number {
      font-weight: bold;
      color: #e67e22;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>This is the Details of the Client</h1>
    <p><span style="font-weight:bold">Nmae</span>: ${name}</p>
    <p><span style="font-weight:bold">Email</span>: ${email}</p>
    <p><span style="font-weight:bold">Phone Number</span>: ${phone}</p>
    <p><span style="font-weight:bold">Request</span>: ${request}</p>
  </div>
</body>
</html>
`; 
  // name: 'Rushabh Ramani',
  // email: 'jayshreeramani@gmail.com',
  // phone: '9082070031'
  // Prepare the email message
  let message = {
    from: email,
    to: 'rushabhramani849@gmail.com',
    subject: `Request Call for ${request}`,
    text: "this i the trial",
    html: html
  };
    
  transporter.sendMail(message, (err) => {
    if (err) {
      console.log('Error occurred. ' + err.message);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log("Email sent succ"); 
    res.status(200).json({ status: "success", message: "Email sent successfully!" });
  });
});

// Define a route to handle the email sending
app.post('/send-email', (req, res) => {
  const { name, email, subject, request } = req.body;
  console.log(name); 
  console.log(email); 
  console.log(subject);
  console.log(request); 
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Client Details</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    body {
      font-family: 'Poppins', sans-serif;
      background-color: #f5f5f5;
      color: #333;
      display: flex;
      min-height: 100vh;
      margin: 0;
    }

    .container {
      background-color: #fff;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      max-width: 500px;
      width: 100%;
    }

    h1 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 2rem;
    }

    p {
      margin: 1rem 0;
      font-size: 1.1rem;
    }

    .phone-number {
      font-weight: bold;
      color: #e67e22;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>This is the Details of the Client</h1>
    <p><span style="font-weight:bold">Nmae</span>: ${name}</p>
    <p><span style="font-weight:bold">Email</span>: ${email}</p>
    <p><span style="font-weight:bold">Mesaage</span>: ${request}</p>
  </div>
</body>
</html>
`; 
  // Prepare the email message
  let message = {
    from: email,
    to: 'rushabhramani849@gmail.com',
    subject: `${subject}`,
    text: "this i the trial",
    html: html
  };
    
  transporter.sendMail(message, (err) => {
    if (err) {
      console.log('Error occurred. ' + err.message);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    res.status(200).json({ status: "success", message: "Email sent successfully!" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});