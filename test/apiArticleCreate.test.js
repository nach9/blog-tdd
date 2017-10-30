var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')
var app = require('../app')

chai.use(chaiHttp)

describe('post article route', function () {
  it('should return the article data, after they\'re saved to the database', function (done) {
    chai.request(app)
    .post('/api/articles')
    .send({
      title: 'Jaenal Jadi Makin Tamvan',
      content: 'INI HOAX',
      author: 'Redha Pake H'
    })
    .end(function (err, response) {
      response.status.should.equal(200)
      response.body.should.be.an('object')
      response.body.should.have.property('_id')
      response.body.should.have.property('title')
      response.body.should.have.property('content')
      response.body.should.have.property('author')
      response.body.title.should.equal('Jaenal Jadi Makin Tamvan')
      response.body.content.should.equal('INI HOAX')
      response.body.author.should.equal('Redha Pake H')
      done()
    })
  })
})
