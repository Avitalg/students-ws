'use strict';

var express = require("express");
var data = require("./students");


var app = express();
var port = process.env.PORT || 3000;

//returns all students
app.get("/allStudents", function(req, res){
	var students = data.getAllStudents();
	res.json(students);
});

//returns only excellence students
app.get("/getAllExcellenceStudents", function(req, res){
	var students = data.getAllExcellenceStudents();
	res.json(students);
});

//returns excellence students by year
app.get("/getExcellenceByYear/:year", function(req, res){
	var students = data.getExcellenceByYear(req.params.year);
	res.json(students);
});

//return student by his id
app.get('/getStudent/:id', function (req, res) {
	var students = data.getStudent(req.params.id);
	res.json(students);
   });

//returns students by area they live in
app.get('/getStudentByArea/:area', function (req, res) {
	var students = data.getStudentsByArea(req.params.area);
	res.json(students);
   });

//returns students that are doing specific degree and in specific year
app.get('/getStudent/:degree/:year', function (req, res) {
	var students = data.getStudentsByDegreeAndYear(req.params.degree, req.params.year);
	res.json(students);
   });

//returns students with range of grades
app.get('/getGrade/:grade1/:grade2', function (req, res) {
	var students = data.getStudentsByGrade(req.params.grade1, req.params.grade2);
	res.json(students);
   });


app.all("/", function(req, res){
	res.json("Say hello to my WS");
});


app.listen(port);

console.log("listening on port "+ port);