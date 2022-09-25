import express from 'express';
import infoRouter from './routers/info.router.js';
import handlebars from 'express-handlebars';
import { fileURLToPath } from 'url';
import path from 'path';
import { config } from './config/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = config.server.PORT;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT} :)`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, '../public/views'));
app.set('view engine', 'handlebars');

app.use('/info', infoRouter);
