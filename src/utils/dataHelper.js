import courses from "./data";


const depts = ["BIOL", "CHEM", "CSCI", "MATH", "PHYS", "ROBT", "NONE"];
let courseTree = [];

function makeTreeNode(course) {
	return {
		name: course.title + " " + course.st,
		toggled: false,
		course
	};
}

function getCourseTree() {
	if (courseTree.length === 0) {
		courseTree = (depts.map(item => ({
			name: item,
			children: []
		})));
		courses.map(course => {
			let idx = depts.findIndex(item => (item === course.abbr.split(" ")[0] || item === "NONE"));
			courseTree[idx].children.push(makeTreeNode(course));
			return idx;
		})
	}
	return courseTree;
}

export {getCourseTree};