const User = require('../models/users');

class UserController{
  static getAll(req,res){
    User.find({},(err,result)=>{
      res.status(200).json(result)
    })
  }

  static findUsername(req,res){
    let data={
      username:req.body.username
    }
    User.findOne(data)
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(500).json(err)
    })
  }

  static addNew(req,res){
    let insert={
      name:req.body.name,
      username:req.body.username,
      password:req.body.password,
      role:req.body.role,

    }
    User.create(insert).then((result)=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(405).json(err)
    })
  }

  static editData(req,res){
    let condition={
      username : req.body.username
    }
    let newData={
        $set:{
          name:req.body.name,
        }
      }
      User.updateOne(condition,newData).then(result=>{
        res.status(200).json(result)
      }).catch(err=>{
        res.status(500).json(err)
      })
      }

  static deleteData(req,res){
    let condition={
      username : req.body.username
    }
    User.findOneAndRemove(condition).then(result=>{
      res.status(200).json(result)
      }).catch(err=>{
        res.status(500).json(err)
      })
      }

}

module.exports = UserController;
