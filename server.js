import express from "express";
import path from 'path' 
import { fileURLToPath } from 'url';

const app = express()
const port = 8082
/* serving static */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', async (req,res)=>{
   //res.sendFile(path.join(__dirname),'views','home.html')
    try {
        res.sendFile(path.join(__dirname,'views','home.html'))
    } catch (err) {
        console.error('Error sending file:', err); 
        res.status(500).send('Internal Server Error'); 
    }
})
app.get('/gallery', async (req,res)=>{
   //res.sendFile(path.join(__dirname),'views','home.html')
    try {
        res.sendFile(path.join(__dirname,'views','gallery.html'))
    } catch (err) {
        console.error('Error sending file:', err); 
        res.status(500).send('Internal Server Error'); 
    }
})
app.get('/about', async (req,res)=>{
   //res.sendFile(path.join(__dirname),'views','home.html')
    try {
        res.sendFile(path.join(__dirname,'views','about.html'))
    } catch (err) {
        console.error('Error sending file:', err); 
        res.status(500).send('Internal Server Error'); 
    }
})
app.get('/contact', async (req,res)=>{
   //res.sendFile(path.join(__dirname),'views','home.html')
    try {
        res.sendFile(path.join(__dirname,'views','contact.html'))
    } catch (err) {
        console.error('Error sending file:', err); 
        res.status(500).send('Internal Server Error'); 
    }
})

app.listen(port, ()=>{
    console.log(`Server is running on port${port}`)
})