const Item = require('../models/item')

const getItem = async(req , res) => {
    try {
        const items = await Item.find()
        res.render('index' , { items })
    }catch(err) {
        res.status(500).send(err.message)
    }
}

const newItem = (req , res) => {
    res.render('new')
}

const addItem = async(req , res) => {
    try {
        const { name , desc , price } = req.body
        const item = new Item({ name , desc , price })
        await item.save()
        res.redirect('/items')
    }catch(err) {
        res.status(500).send(err.message)
    }
}

const showById = async(req , res) => {
    try {
        const item = await Item.findById(req.params.id)
        if(!item) {
            return res.status(404).send('Not found')
        }
        res.render('show' , { item })
    }catch(err) {
        res.status(500).send(err.message)
    }
}

const editItem = async(req , res) => {
    try {
        const item = await Item.findById(req.params.id)
        if(!item) {
            return res.status(404).send('Not found')
        }
        res.render('edit' , { item })
    }catch(err) {
        res.status(500).send(err.message)
    }
}

const updateItem = async(req , res) => {
    try {
        const { name , desc , price } = req.body
        await Item.findByIdAndUpdate( req.params.id , { name , desc , price } )
        res.redirect('/items')
    }catch(err) {
        res.status(500).send(err.message)
    }
}

const deleteById = async(req , res) => {
    try {
        await Item.findByIdAndDelete(req.params.id)
        res.redirect('/items')
    }catch(err) {
        res.status(500).send(err.message)
    }
}

module.exports = { getItem , newItem , addItem , showById , editItem , updateItem , deleteById }