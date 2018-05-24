var express = require('express');
var router = express.Router();
var student = require("../controllers/StudentController.js");
// Get all employees
router.get('/', student.list);

// Get single employee by id
router.get('/show/:id', student.show);

// Create employee
router.get('/create', student.create);

// Save employee
router.post('/save', student.save);

// Edit employee
router.get('/edit/:id', student.edit);

// Edit update
router.post('/update/:id', student.update);

// Edit update
router.post('/delete/:id', student.delete);
module.exports = router;
