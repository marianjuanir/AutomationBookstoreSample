import { Browser, Page, firefox, chromium, Locator, expect } from '@playwright/test';
import { BasePageObject } from './base-page';
import { CommonUtils } from '../utils/common';

export class Homepage extends BasePageObject {
    private readonly textField_Search: Locator = this.page.locator('//input[@id=\'searchBar\']');
    private readonly list_MatchingBooks: Locator = this.page.locator('#productList >> li[id*=pid]:not([class*=hidden])')
    private readonly list_HiddenBooks: Locator = this.page.locator('#productList [class*=hidden]')

    private commonUtils = new CommonUtils(this.page);

    async enterTextInSearchField(paramStrText: string): Promise<void>{
        await this.textField_Search.type(paramStrText);
        expect(await this.textField_Search.inputValue()).toContain(paramStrText)
    }

    async verifyBooksCount(paramBooksCount: number): Promise<void>{
        let strSelector = this.commonUtils.getSelectorFromLocator(this.list_HiddenBooks)
        await this.page.waitForSelector(strSelector, { state: 'attached' })
        let objBooks = await this.list_MatchingBooks.elementHandles();
        expect(objBooks.length).toBe(5)
    }
}