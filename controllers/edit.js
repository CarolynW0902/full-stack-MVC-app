const ItemList = require('../models/itemList')

module.exports = {
  getEdit: async (req,res) => {
      const id = req.params.id
      console.log(id)
      try {
        const items = await ItemList.find()
        res.render("edit.ejs", { itemList: items, idItem: id})
      } catch (err){
        if(err) return res.status(500).send(err)
      }
  },

  deleteItem: async (req,res) => {
    const id = req.params.id
    console.log(id)
    try {
      const result = await ItemList.findByIdAndDelete(id)
      console.log(result)
      res.redirect('/')
    } catch (err){
      if(err) return res.status(500).send(err)
    }
  },

  updateItem: async (req,res) => {

  }
}