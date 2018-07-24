parse = require('csv-parse/lib/sync');
fs = require('fs');

const csv_filename = 'data/school_schedule_by_term.csv';
const json_filename = 'data/school_schedule_by_term.json';

let data = fs.readFileSync(csv_filename, 'utf8');
let columns = ()=>["abbr","st","title","cr_us","cr_ects","start_date","end_date","days","time","enr","capacity","faculty","room"];
// let columns = (header)=>header.map(head=>head.replace(/\s/g, ' '));

let records = parse(data, {columns});
records = records.map((row) => {
	Object.keys(row).map((key) => {
		row[key] = row[key].replace(/\s/g, " ");
	});
	return row;
});
console.log("csv parsed");
let json = JSON.stringify(records);
fs.writeFileSync(json_filename, json, 'utf8');
console.log("json written");