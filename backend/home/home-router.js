/////////////////
//Router for getting and creating (aka posting) information on our home page
/////////////////
const path = require('path')
const router = require('express').Router();
const rootPath = path.join(__dirname, "../../");//1st argument === go here, 2nd argument === stop here
//Response for the home page
const home = (req, res) => {
	res.sendFile(rootPath + "./frontend/index.html");
}

//Configure router for get and post calls
router.route("*")
	.get(home)

module.exports = router;