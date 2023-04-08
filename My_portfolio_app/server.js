const app = require('./myapp/app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


mongoose.connect('mongodb://localhost:27017/portfolio-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
