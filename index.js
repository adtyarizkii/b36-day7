const express = require('express');

const app = express();
const PORT = 80;

const isLogin = true;

app.set('view engine', 'hbs');
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.render('index', { isLogin });


});

app.get('/contact', (req, res) => {
    res.render('contact-me');
});


app.get('/add-project', (req, res) => {
    res.render('project');
});

app.post('/add-project', (req, res) => {
    const data = req.body;

    console.log(data);

    res.redirect('/');
});

app.get('/project-detail/:index', (req, res) => {
   const index = req.params.index;

   res.render('project-detail', { i: index });

    console.log(index);
});

app.listen(PORT, () => {
    console.log('Server berjalan pada PORT:', PORT);
});