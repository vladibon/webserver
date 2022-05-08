import app from './app';

const { PORT = 4000 } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
