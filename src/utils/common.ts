import { Locator } from '@playwright/test';
import { BasePageObject } from '../pages/base-page';

export class CommonUtils extends BasePageObject {

    getSelectorFromLocator(paramLocator: Locator) {
        return paramLocator.toString().split('@')[1];
    };

}