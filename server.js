import express from "express";
import path from 'path' 
import { fileURLToPath } from 'url';

const app = express()
const port = 8082

/* serving static */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')))
//include ejs
app.set('view engine', 'ejs')
app.get('/', async (req,res)=>{
   //res.sendFile(path.join(__dirname,'views','home.html'))
    try {
        res.render('home.ejs')
    } catch (err) {
        console.error('Error sending file:', err); 
        res.status(500).send('Internal Server Error'); 
    }
})
app.get('/gallery', async (req,res)=>{
   //res.sendFile(path.join(__dirname),'views','home.html')
    try {
        res.render('gallery.ejs')
    } catch (err) {
        console.error('Error sending file:', err); 
        res.status(500).send('Internal Server Error'); 
    }
})
app.get('/about', async (req,res)=>{
   //res.sendFile(path.join(__dirname),'views','home.html')
    try {
        res.render('about.ejs')
    } catch (err) {
        console.error('Error sending file:', err); 
        res.status(500).send('Internal Server Error'); 
    }
})
app.get('/contact', async (req,res)=>{
   //res.sendFile(path.join(__dirname),'views','home.html')
    try {
        res.render('contact.ejs')
    } catch (err) {
        console.error('Error sending file:', err); 
        res.status(500).send('Internal Server Error'); 
    }
})

//user data with EJS
app.get('/users', async (req,res)=>{
   //passinng some user data
    const userData = [{ name: 'Kassim', age: 62, isAdmin: true },{ name: 'Zaid', age: 162, isAdmin: false }]

    res.render('someData.ejs', {users:userData}, (err, html) => {
        
            if (err) {
                console.error(err);
                res.status(500).send('Error rendering template');
            } else {
                res.send(html);
            }
        })

})

app.get('/products', (req,res)=>{
    const products = [{name:'book',price:7},{name:'toy',price:5},{name:'watch',price:71},]
    res.render('products',{items:products})
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})