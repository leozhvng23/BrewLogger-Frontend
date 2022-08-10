export function getDate(date) {
	const inputDate = new Date(date);
	return inputDate.toLocaleString("en", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}
