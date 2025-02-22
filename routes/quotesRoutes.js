import quotesController from '../controller/quotesController.js'
import e from "express";

 export const router = e.Router();

router.post('/Quotes', quotesController.Quotes);
router.get('/getQuotes', quotesController.getQuotes);


router.get('/',(req, res) =>{ 
    res.send({message : 'test quote be'})
})

//s