/**
 * @file Apps Script types custom extender
 * @author Alex Ivanov <ai@contributor.pw>
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
