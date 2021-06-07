const express = require('express');
const bcrypt = require('bcryptjs');
const createJWT = require('./createJWT');

const router = express.Router();

router.post('/', async (req,res)=>{
    req.db.query("SELECT * FROM users WHERE email = ?", [req.body.email], async (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            res.status(404).send("Email is incorrect");
        } else if(await bcrypt.compare(req.body.password, results[0].password)){
                token = createJWT(results[0]);
                res.send(token);
            }else{
                res.status(401).send("Password is incorrect");
            }
    })
})



module.exports = router;