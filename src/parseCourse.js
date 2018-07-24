parse = require('csv-parse/lib/sync');
fs = require('fs');

const csv_filename = 'data/school_schedule_by_term.csv';
const json_filename = 'data/school_schedule_by_term.json';

let data = fs.readFileSync(csv_filename, 'utf8');

let records = parse(data, {columns: true});
records = records.map((row) => {
	Object.keys(row).map((key, index) => {
		row[key] = row[key].replace(/\s/g, " ");
	});
	return row;
});
console.log("csv parsed");
let json = JSON.stringify(records);
fs.writeFileSync(json_filename, json, 'utf8');
console.log("json written");