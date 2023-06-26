const router = require('express').Router();
const userController = require('../contrrollers/users')
const upload = require("../utils/multer");


router.get('/',userController.selectAll)
router.post('/insert',upload.single("image"),userController.insertUser)
router.delete('/:id',userController.deleteUser)
// router.put("/:id",upload.single("image"),userController.updateUser)

module.exports = router;