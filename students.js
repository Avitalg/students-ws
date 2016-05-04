'use strict';

var fs = require('fs');

var data = JSON.parse(fs.readFileSync('data/students.json', 'utf8'));


//returns the student details by his id
exports.getStudent = function(id){
	for(var i=0; i<data.students.length;i++){
		if(data.students[i].student_id == id){
			return (data.students[i]);
		}
	} 
};

//returns all excellence students
exports.getAllExcellenceStudents = function(id){
	var result = [];
	for(var i=0; i<data.students.length;i++){
		if(data.students[i].grade > 90){
			result.push(data.students[i]);
		}
	}
	return result;
};

//returns all students
exports.getAllStudents = function(){
	var result = [];
	for(var i=0; i<data.students.length;i++){
			result.push(data.students[i]);
	}

	return result;
};

//returns excellence student by year
exports.getExcellenceByYear = function(year){
	var result = [];
	for(var i=0; i<data.students.length;i++){
		if(data.students[i].grade > 90 && data.students[i].year == year){
			result.push(data.students[i]);
		}
	}
	return result;
};

//returns students by the place they're living in.
exports.getStudentsByArea = function(area){
	var result = [];
	for(var i=0; i<data.students.length;i++){
		if(data.students[i].area == area){
			 result.push(data.students[i]);
		}
	}

	return result;
};

//returns students by their degree
exports.getStudentsByDegree = function(degree){
	var result = [];
	for(var i=0; i<data.students.length;i++){
		if(data.students[i].degree == degree){
			 result.push(data.students[i]);
		}
	}

	return result;
};

//returns students by their degree
exports.getStudentsByDegreeAndYear = function(degree, year){
	var result = [];
	for(var i=0; i<data.students.length;i++){
		if(data.students[i].degree == degree && data.students[i].year == year){
			 result.push(data.students[i]);
		}
	}

	return result;
};


exports.getStudentsByGrade = function(grade1, grade2){
	var result = [];
	for(var i=0; i<data.students.length;i++){
		if(data.students[i].grade >= grade1 &&data.students[i].grade<= grade2){
			 result.push(data.students[i]);
		}
	}

	return result;
};


exports.get