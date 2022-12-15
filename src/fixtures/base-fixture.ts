import { test as base, Page, Locator, expect, request } from '@playwright/test';

import { Homepage } from '../pages/homepage'
import { CommonUtils } from '../utils/common';

interface TestFixtures {
    homePage: Homepage;
    loggedInPage: Page;
    commonUtils: CommonUtils
}

const baseFixture = base.extend<TestFixtures>({
    loggedInPage: async ({ page }, use) => {
        await base.step(`Navigate to start url`, async () => {
            await page.goto('https://automationbookstore.dev/');
        });
        await use(page);

    },

    homePage: async ({loggedInPage}, use) => {
        const homePage: Homepage = new Homepage(loggedInPage);
        await use(homePage);
    },

    commonUtils: async ({ page }, use) => {
        const commonUtils: CommonUtils = new CommonUtils(page);
        await use(commonUtils);
    },



}

)

export default baseFixture;