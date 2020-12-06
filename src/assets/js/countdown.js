import spacetime from 'spacetime';

export default class ChristmasCountdown {
	constructor() {}

	get now() {
		return spacetime.now();
	}

	get christmas() {
		let year = this.now.year();
		if (this.now.month() === 11 && this.now.date() > 24) // months are 0 based, because why not?
			year++; // if it's already Christmas, set date to next Christmas	
		return spacetime(`December 25, ${year} 0:00:00`); // midnight on Christmas day
	}

	get months() {
		let num = this.now.diff(this.christmas, 'months');
		return {
			num,
			text: num === 1 ? 'month' : 'months'
		};
	}

	get weeks() {
		let num = this.now.diff(this.christmas, 'weeks');
		return {
			num,
			text: num === 1 ? 'week' : 'weeks'
		};
	}

	get days() {
		let num = this.now.diff(this.christmas, 'days');
		return {
			num,
			text: num === 1 ? 'day' : 'days'
		};
	}

	get sleeps() {
		let num = this.days.num + 1;
		return {
			num,
			text: num === 1 ? 'sleep' : 'sleeps'
		};
	}

	get hours() {
		let num = this.now.diff(this.christmas, 'hours');
		return {
			num,
			text: num === 1 ? 'hour' : 'hours'
		};
	}

	get minutes() {
		let num = this.now.diff(this.christmas, 'minutes');
		return {
			num,
			text: num === 1 ? 'minute' : 'minutes'
		};
	}

	get seconds() {
		let num = this.now.diff(this.christmas, 'seconds');
		return {
			num,
			text: num === 1 ? 'second' : 'seconds'
		};
	}

	get total() {
		let n = this.now.diff(this.christmas, 'seconds');
		let days = Math.floor(n / (24 * 3600));

		n = n % (24 * 3600);
		let hours = Math.floor(n / 3600);

		n %= 3600;
		let minutes = Math.floor(n / 60);

		n %= 60;
		let seconds = Math.floor(n);

		let live = {
			months_based: this.christmas.since(this.now).diff,
			days_based: { days, hours, minutes, seconds },
		};

		return live;
	}

	get isToday() {
		// a new spacetime is used rather than this.christmas as we want THIS Christmas for certain, not next Christmas
		return this.now.isSame(spacetime(`December 25, ${this.now.year()} 0:00:00`), 'date');
	}

	get isTomorrow() {
		return this.now.isSame(this.christmas.subtract(1, 'days'), 'date');
	}

}