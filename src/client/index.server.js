import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';

const app = express();
const port = process.env.PORT || 3001;

const distDir = path.join(__dirname, './dist');
app.use(express.static(distDir));

const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.set('views', path.join(`${__dirname}`, './views'));

app.get(['/', '/Error'],
  (req, res) => {
    res.render('client', { layout: false });
  });

app.listen(port);
