import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static('dashboard/client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('dashboard/client/build/index.html'));
});

app.get('/', (req, res) => {
    res.send('a');
});

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));