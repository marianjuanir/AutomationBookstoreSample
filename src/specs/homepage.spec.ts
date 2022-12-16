import test from '../fixtures/base-fixture'

test.describe('@Sample Sample Spec File', async () => {
    test('@TC1 Search for a book', async ({ homePage }) => {
        try {
            let strBookTitle = 'est'
            let numMatchingBooks = 5
            await test.step('Enter Book Title in the Search bar', async () => {
                await homePage.enterTextInSearchField(strBookTitle)
            });
            await test.step('Verify that books displayed are correct', async () => {
                await homePage.verifyBooksCount(numMatchingBooks);
            });
        }
        catch (error) {
            throw new Error(error);
        }
        finally {
            // add clean-up code here
        }        
    });
})