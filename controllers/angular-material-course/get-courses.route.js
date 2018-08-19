"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_data_1 = require("./db-data");
function getAllCourses(req, res) {
	console.log(`get-courses.route.js:getAllCourses ${req}`);
    res.status(200).json({ results: Object.values(db_data_1.COURSES) });
}
exports.getAllCourses = getAllCourses;
function getCourseById(req, res) {
	console.log(`get-courses.route.js:getCourseById ${req}`);
    var courseId = req.params["id"];
    var courses = Object.values(db_data_1.COURSES);
    var course = courses.find(function (course) { return course.id == courseId; });
    res.status(200).json(course);
}
exports.getCourseById = getCourseById;
//# sourceMappingURL=get-courses.route.js.map