
class BeautifulDate {
	date:Date;

	constructor(date?:Date) {
		this.date = date ? date : new Date();
	}

	static weekdayNames = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	static monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	getTimeStr() {
		const hours = `0${this.date.getHours()}`.slice(-2);
		const minutes = `0${this.date.getMinutes()}`.slice(-2);
		return `${hours}:${minutes}`;
	}

	getDateStr() {
		const year = this.date.getFullYear();
		const month = this.date.getMonth();
		const monthName = BeautifulDate.monthNames[month];
		const weekdayName = BeautifulDate.weekdayNames[this.date.getDay()];
		const day = `0${this.date.getDate()}`.slice(-2);
		const bDate = `${weekdayName}, ${day} ${monthName} ${year}`;
		return bDate;
	}

	getFullDateStr() {
		const year = this.date.getFullYear();
		const month = this.date.getMonth();
		const monthName = BeautifulDate.monthNames[month];
		const weekdayName = BeautifulDate.weekdayNames[this.date.getDay()];
		const day = `0${this.date.getDate()}`.slice(-2);
		const bDate = `${this.getTimeStr()} ${weekdayName}, ${day} ${monthName} ${year}`;
		return bDate;
	}
}

export default BeautifulDate;
