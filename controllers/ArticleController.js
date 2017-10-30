const Article = require('../models/articles')


class ArticleController{
  static getAll(req,res){
    Article.find({},(err,result)=>{
      res.status(200).json(result)
    })
  }

  static addNew(req,res){
    let insert={
      title: req.body.title,
      content: req.body.content,
      author:req.body.author,
      created_at: new Date(),
    }
    Article.create(insert).then((result)=>{
      res.status(200).json(result)

    })
  }

  static editData(req,res){
    let condition={
      _id : req.body.id
    }
    let newData={
        $set:{
          isbn: req.body.isbn,
          title: req.body.title  ,
          author: req.body.author,
          category: req.body.category ,
          stock: req.body.stock
        }
      }
      Article.update(condition,newData).then(result=>{
        res.status(200).json(result)
      })
      }

  static deleteData(req,res){
    let condition={
      _id : req.body.id
    }
    Article.findOneAndRemove(condition).then(result=>{
      res.status(200).json(result)
      })
      }





}

module.exports = ArticleController;
