/**
 * @file Apps Script types custom extender
 * @author Alex Ivanov <ai@contributor.pw>
 * {@link https://github.com/contributorpw/apps-script-types-custom-extender}
 */

/**
 * @namespace Events
 *
 */

/**
 *
 * Apps Script Events Interface
 *
 * @typedef {{
 *   authMode: globalThis.ScriptApp.AuthMode,
 *   triggerUid: string,
 *   user: globalThis.User
 * }} AppsScriptEvent
 *
 */

/**
 *
 * Spreadsheets EDIT Event Interface
 *
 * @typedef { AppsScriptEvent & {
 *   oldValue: string;
 *   range: globalThis.SpreadsheetApp.Range & {
 *     columnEnd: number,
 *     columnStart: number,
 *     rowEnd: number,
 *     rowStart: number
 *   };
 *   source: globalThis.SpreadsheetApp.Spreadsheet;
 *   value: string;
 * }} Events.SheetsOnEdit
 *
 */

/**
 * 
 * Timedriven Event Interface
 * 
 * @typedef {{
 *   authMode: globalThis.ScriptApp.AuthMode;
 *   year: number;
 *   month: number;
 *   'week-of-year': number;
 *   'day-of-month': number;
 *   'day-of-week': number;
 *   hour: number;
 *   minute: number;
 *   second: number;
 *   timezone: string;
 *   triggerUid: string;
 * }} Events.TimeDriven
 * 
 */
