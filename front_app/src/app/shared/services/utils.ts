import { of } from 'rxjs';

/* UTILS */

export function log(response: any) {
  console.table(response);
}
/**
 * Handle Http operation that failed
 * @param error
 * @param errorValueByDefault
 * @returns
 */
export function handleError(error: Error, errorValueByDefault: any) {
  console.error(error);
  return of(errorValueByDefault);
}
