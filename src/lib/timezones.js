import parseTZ from 'timezone-soft';
/**

 * @param {URL} url
 * @returns {string|undefined}
 */
export const getTZ = url => parseTZ(url.searchParams.get('timezone') ?? 'UTC')[0]?.iana;