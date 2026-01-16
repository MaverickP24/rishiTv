import express from 'express';
const app = express();

app.get('/health', (req, res)=>{
    res.json({
        message: "hello world"
    })
    
})

app.listen(3000);
