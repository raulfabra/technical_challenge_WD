const router = require("express").Router();

const phones = require('../data/phones.json');

router.get('/', (req, res, next) => {
    res.json(phones)
});

router.get('/:id', (req,res,next) => {
    const { id } = req.params
    phones.forEach(phone => {
        if (phone.id == id){
            return res.json(phone)
        }
        if (id <= 0 || phones.length - 1 < id){
            return res.status(500).json("Error: This product don't found")
        }
    })
})

module.exports = router