const router = require('express').Router();

const videoController = require('../controllers/videoController');

router.get('/', videoController.list);
router.get('/category/:category', videoController.listbycategory); 
router.post('/add', videoController.save);
router.get('/update/:id', videoController.edit);
router.post('/update/:id', videoController.update);
router.get('/delete/:id', videoController.delete);


router.get('/add', (req, res) => {
    res.render('add', {
        link: [{ description: "https://www.youtube.com/embed/9n-yiNx8sbY" }] 
    });
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;