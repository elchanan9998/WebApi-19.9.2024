//נגדיר ראוטר עם כל הניתובים ונייצא אותו
const router=require('express').Router();
const categoryController=require('../controllers/category')

router.get('/',categoryController.getAllcategorys);
router.get('//:id',categoryController.getcategoryById);
router.post('/',categoryController.addNewcategory);
router.put('// :id',categoryController.updatecategoryById);
router.delete('// :id',categoryController.deletecategory);


