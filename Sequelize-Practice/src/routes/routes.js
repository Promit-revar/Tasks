const router=require('express').Router();
const {getMenu}=require('../controllers/serviceController');
router.get('/',getMenu);

module.exports=router;