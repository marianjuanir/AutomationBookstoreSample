import { Page } from '@playwright/test';

/**
 * Base page object
 */
export class BasePageObject {
    /**
     * Creates an instance of base page object
     * @param page An instance of the current logged in page context 
     */
    constructor( public page: Page) {
    }
}
