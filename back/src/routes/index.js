const { Router } = require("express");
//const routerUser = require("./userRouter");

const routerNotes = require("./NotasRouter");






const router = Router();

//router.use("/user", routerUser);



router.use("/notes", routerNotes);




module.exports = router;