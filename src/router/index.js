const express = require('express');
const v1Router = require('./v1');
const router = express.Router() ;


router.use("/v1", v1Router);


// router.get("/:id" , (req, res) =>{
//     const id = req.params.id;
    
//     if(shortToLongMap.shortCode != undefined ){
//         res.redirect(301, shortToLongMap[shortCode]);
//     }

//     res.status(404).json("URL not found");
// });

module.exports = router;

