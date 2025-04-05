require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Test route
app.get('/', (req, res) => {
  res.send('ScentEvent Backend API');
});

// Placeholder: Auth routes (Clerk/Firebase)
// Placeholder: Payment routes (Midtrans)
// Placeholder: File upload routes (Cloudinary)
// Placeholder: AI assistant routes (OpenAI)

// Start server
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});