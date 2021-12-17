var express = require('express');
const passport = require('passport');
const { verifyUser, verifyOwner, verifyAdmin } = require('../authenticate');
var router = express.Router();

/* GET home page. */
router.get('/',verifyUser, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.json({"username": "thu"})
})

// router.get('/facebook/token', facebookPassport, passport.authenticate('facebook-token'), (req, res, next) => {
//   res.json({"username": "facebook"})

// });

module.exports = router;
