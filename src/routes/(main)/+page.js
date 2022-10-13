/* eslint-disable sort-keys */
import christmas from '$lib/christmas.js';
/**
 * @type {import('@sveltejs/kit').Load}
 */
export const load = async () => ({
	date: christmas.christmas(),
	seconds: christmas.getSeconds(),
	minutes: christmas.getMinutes(),
	hours: christmas.getHours(),
	days: christmas.getDays(),
	sleeps: christmas.getSleeps(),
	weeks: christmas.getWeeks(),
	months: christmas.getMonths(),
	total: christmas.getTotal(),
	weekday: christmas.getWeekday(),
	percentage: christmas.getPercentage(),
	isToday: christmas.isToday(),
	isTomorrow: christmas.isTomorrow()
});