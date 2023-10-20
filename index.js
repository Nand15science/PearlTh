const express= require('express');
const app = express();

app.get('/', (req, res)=>{
   res.send("Helllo World! From Nand");
});

app.listen(8000);