const express= require('express');
const app = express();

app.get('/', (req, res)=>{
   res.send("Helllo World!");
});

app.listen(8000);