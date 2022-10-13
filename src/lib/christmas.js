/* eslint-disable sort-keys */

const now = () => new Date();

const christmas = () => {
	const now = new Date();
	let year = now.getFullYear();
	if (now.getMonth() === 11 && now.getDate() > 24) year++; // if it's already Christmas, set date to next Christmas (months start at 0, because why not?)
	return new Date(`December 25, ${year} 00:00:00`);
};

const isSame = (date1, date2) => {
	if (date1.getFullYear() !== date2.getFullYear()) return false;
	if (date1.getMonth() !== date2.getMonth()) return false;
	if (date1.getDate() !== date2.getDate()) return false;
	return true;
};

const one_second = 1000;
const one_minute = 60 * one_second;
const one_hour = 60 * one_minute;
const one_day = 24 * one_hour;
const one_week = 7 * one_day;
const one_month = (365 / 12) * one_day;
const one_year = 365 * one_day;

const getSeconds = () => (christmas() - now()) / one_second;
const getMinutes = () => (christmas() - now()) / one_minute;
const getHours = () => (christmas() - now()) / one_hour;
const getDays = () => (christmas() - now()) / one_day;
const getSleeps = () => Math.ceil(getDays());
const getWeeks = () => (christmas() - now()) / one_week;
const getMonths = () => (christmas() - now()) / one_month;

const getTotal = () => {
	let diff = christmas() - now();
	return {
		days: Math.floor(diff / one_day),
		hours: Math.floor((diff %= one_day) / one_hour),
		minutes: Math.floor((diff %= one_hour) / one_minute),
		seconds: Math.floor((diff %= one_minute) / one_second)
	};
};

const getWeekday = () => new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(christmas());
const getPercentage = () => ((one_year - (christmas() - now())) / one_year) * 100;

const isToday = () => isSame(now(), new Date(`December 25, ${now().getFullYear()} 00:00:00`)); // don't use `christmas()` which would be next year
const isTomorrow = () => {
	const xmas = christmas();
	xmas.setDate(xmas.date - 1);
	return isSame(now(), xmas);
};

export default {
	christmas,
	getSeconds,
	getMinutes,
	getHours,
	getDays,
	getSleeps,
	getWeeks,
	getMonths,
	getTotal,
	getWeekday,
	getPercentage,
	isToday,
	isTomorrow
};