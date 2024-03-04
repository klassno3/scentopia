// Load environment variables
require('dotenv').config();
const bodyParser = require('body-parser');

// Load dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');
const session = require('express-session');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');

// Load custom modules
const connectDB = require('./Config/Database');
mongoose.connect('mongodb+srv://Nati-Man:Admin123@natnael-asnake.whghuvf.mongodb.net/PERFUMESTORESYSTEM', { useNewUrlParser: true, useUnifiedTopology: true });
const {notFound, errorHandler} = require('./Middleware/ErrorHandlingMiddleware');

// Load routes
const userRoutes = require('./Routes/UsersRoutes');
const paymentRoutes = require('./Routes/paymentRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const productRoutes = require('./Routes/productRoutes');
const categoryRoutes = require('./Routes/categoryRoutes');

// Initialize Express app
const app = express();

// Connect to the database
connectDB();

// Use middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(compression());
app.use(session({ cookie: { secure: false, httpOnly: true }, saveUninitialized: false }));
// Parse incoming request bodies
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

// Define routes
const routes = [
    { path: '/api/users', route: userRoutes },
    { path: '/api/payment', route: paymentRoutes },
    { path: '/api/orders', route: orderRoutes },
    { path: '/api/products', route: productRoutes },
    { path: '/api/categories', route: categoryRoutes },
];

routes.forEach(({ path, route }) => {
    app.use(path, route);
});



// Use error handlers
app.use(notFound);
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});