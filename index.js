const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public/pdf')));

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.get('/assets/pdf/:filename', (req, res) => {
    const { filename } = req.params;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Dispostion', 'inline; filename=' + filename);

    res.sendFile(path.join(__dirname, 'public', 'pdf', filename))
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
})