import { devices, PlaywrightTestConfig } from '@playwright/test';

const playwright: PlaywrightTestConfig = {
    testDir: '../src',
    workers: 1,
    retries: 0,
    timeout: 60000,
    maxFailures: 20,
    use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'on'
    },
    reporter: [['list'], ['html', { open: 'always' }]],
    projects: [
        {
            name: 'ExtraLargeDesktop_Chrome',
            use: {
                ...devices['Desktop Chrome'],
                browserName: 'chromium'
            },
        }
    ]
};

export default playwright;