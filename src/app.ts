import express from 'express';
import bodyParser from 'body-parser';
import jobRoutes from './routes/jobRoutes';

const app = express();

app.use(bodyParser.json());
app.use('/api', jobRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
