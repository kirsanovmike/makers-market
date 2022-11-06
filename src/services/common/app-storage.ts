/* --- Module for working with the LocalStorage. --- */

const MODULE_NAME: string = "MakersMarketTasks";

/* Get key for localStorage Item. */
export function getModuleKey(localStorageKey?: string): string {
  return `${MODULE_NAME}.${localStorageKey ?? ""}`;
}

/* Get localStorage item. */
export function getLocalStorageItem(localStorageKey: string): string | null {
  return localStorage.getItem(getModuleKey(localStorageKey));
}

/* Set item in localStorage. */
export function setLocalStorageItem(localStorageKey: string, value: any): void {
  localStorage.setItem(getModuleKey(localStorageKey), JSON.stringify(value));
}
