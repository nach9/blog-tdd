const chai = require('chai')
const chaiHttp = require('chai-http');
const should = chai.should()

const app = require('../app');

const User = require('../models/users');

chai.use(chaiHttp);

describe('post user route', function(){
  after(function(){
    User.remove({}).then(result=>{
      console.log('cleared data users');
      })

  })

  it('should return new user data saved in dbase',function(done){
    chai.request(app)
    .post('/api/users')
    .send({
      name:'baba',
      username: 'baba01' ,
      password:'passbaba',
      role:'user',
    })
    .end(function(err,resp){
      resp.status.should.equal(200)
      resp.body.should.be.an('object')
      resp.body.should.have.property('_id')
      resp.body.should.have.property('name')
      resp.body.should.have.property('username')
      resp.body.should.have.property('password')
      resp.body.should.have.property('role')
      resp.body.name.should.equal('baba')
      resp.body.username.should.equal('baba01')
      resp.body.password.should.equal('passbaba')
      resp.body.role.should.equal('user')
      done()
    })
  })
  it('should return error for same user name',function(done){
    chai.request(app)
    .post('/api/users')
    .send({
      name:'baba',
      username: 'baba01' ,
      password:'passbaba',
      role:'user',
    })
    .end(function(err,resp){
      resp.status.should.equal(405)
      resp.body.should.be.an('object')

      done()
    })
  })
  it('should return new user data saved in dbase if different username',function(done){
    chai.request(app)
    .post('/api/users')
    .send({
      name:'baba',
      username: 'baba02' ,
      password:'passbaba',
      role:'user',
    })
    .end(function(err,resp){
      resp.status.should.equal(200)
      resp.body.should.be.an('object')
      resp.body.should.have.property('_id')
      resp.body.should.have.property('name')
      resp.body.should.have.property('username')
      resp.body.should.have.property('password')
      resp.body.should.have.property('role')
      resp.body.name.should.equal('baba')
      resp.body.username.should.equal('baba02')
      resp.body.password.should.equal('passbaba')
      resp.body.role.should.equal('user')
      done()
    })
  })
  it('should get all user data',function(done){
    chai.request(app)
    .get('/api/users')

    .end(function(err,resp){
      resp.status.should.equal(200)
      resp.body.should.be.an('array')
      resp.body[0].should.have.property('_id')
      resp.body[0].should.have.property('name')
      resp.body[0].should.have.property('username')
      resp.body[0].should.have.property('password')
      resp.body[0].should.have.property('role')
      resp.body[0].name.should.equal('baba')
      resp.body[0].username.should.equal('baba01')
      resp.body[0].password.should.equal('passbaba')
      resp.body[0].role.should.equal('user')
      resp.body[1].name.should.equal('baba')
      resp.body[1].username.should.equal('baba02')
      resp.body[1].password.should.equal('passbaba')
      resp.body[1].role.should.equal('user')
      done()
    })
  })
  it('should get data searched by username',function(done){
    chai.request(app)
    .get('/api/users/username')
    .send({
      username: 'baba02'
    })

    .end(function(err,resp){
      resp.status.should.equal(200)
      resp.body.should.be.an('object')
      resp.body.should.have.property('_id')
      resp.body.should.have.property('name')
      resp.body.should.have.property('username')
      resp.body.should.have.property('password')
      resp.body.should.have.property('role')
      resp.body.name.should.equal('baba')
      resp.body.username.should.equal('baba02')
      resp.body.password.should.equal('passbaba')
      resp.body.role.should.equal('user')
      done()
    })
  })
  it('should edit data searched by username',function(done){
    chai.request(app)
    .put('/api/users')
    .send({
      name: 'buba',
      username: 'baba02'
    })
    .end(function(err,resp){
      resp.status.should.equal(200)
      resp.body.should.be.an('object')
      resp.body.nModified.should.equal(1)

      done()
    })
  })
  it('should delete data searched by username',function(done){
    chai.request(app)
    .delete('/api/users')
    .send({
      username: 'baba02'
    })
    .end(function(err,resp){
      resp.status.should.equal(200)
      resp.body.should.be.an('object')
      resp.body.should.have.property('_id')
      resp.body.should.have.property('name')
      resp.body.should.have.property('username')
      resp.body.should.have.property('password')
      resp.body.should.have.property('role')
      resp.body.name.should.equal('buba')
      resp.body.username.should.equal('baba02')
      resp.body.password.should.equal('passbaba')
      resp.body.role.should.equal('user')

      done()
    })
  })

})
