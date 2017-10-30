var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

/* GET users listing. */

router.get('/',UserController.getAll)

router.get('/username',UserController.findUsername)

router.post('/', UserController.addNew )

router.put('/',UserController.editData)

router.delete('/',UserController.deleteData)


module.exports = router;
