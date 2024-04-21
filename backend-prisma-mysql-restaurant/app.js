const express=require('express');
const cors=require('cors')

const app = express()

//BodyParser Middleware
app.use(express.json());
app.use(cors())

// requête    
app.get("/",(req,res)=>{
    res.send("bonjour");
    });

// Appel de routes
const categoriesRouter =require("./routes/categories.route")
app.use('/api/categories', categoriesRouter);

const productsRouter =require("./routes/products.route")
app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

module.exports = app;