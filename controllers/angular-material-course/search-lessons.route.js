"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_data_1 = require("./db-data");
var timers_1 = require("timers");
function searchLessons(req, res) {
	console.log(`search-lessons.route.js:searchLessons ${JSON.stringify(req.query)}`);
    var queryParams = req.query;
    var courseId = queryParams.courseId, filter = queryParams.filter || '', sortOrder = queryParams.sortOrder, pageNumber = parseInt(queryParams.pageNumber) || 0, pageSize = parseInt(queryParams.pageSize);
    var lessons = Object.values(db_data_1.LESSONS).filter(function (lesson) { return lesson.courseId == courseId; }).sort(function (l1, l2) { return l1.id - l2.id; });
    if (filter) {
        lessons = lessons.filter(function (lesson) { return lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0; });
    }
    if (sortOrder == "desc") {
        lessons = lessons.reverse();
    }
    var initialPos = pageNumber * pageSize;
	
    var lessonsPage = lessons.slice(initialPos, initialPos + pageSize);
    timers_1.setTimeout(function () {
        res.status(200).json({ payload: lessonsPage });
    }, 1000);
}
exports.searchLessons = searchLessons;
//# sourceMappingURL=search-lessons.route.js.map