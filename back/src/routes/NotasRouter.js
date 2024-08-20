const express = require("express");
const router = express.Router();

const getNotes= require("../controllers/getNotes");
const addNotes = require("../controllers/AddNotes");
const updateNotes = require("../controllers/UpdateNotes");
const DelNotes = require("../controllers/DelNotes");


router.post("/registernotes",addNotes );
router.get("/allnotes", getNotes);

router.patch("/update/:id", updateNotes),
router.delete("/:id", DelNotes);

module.exports = router;