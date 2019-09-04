const assert = require('chai').assert;
const phptravelsPage = require('../pages/phptravels_page');

const LANGUAGE_ID = 'ru';
const LANGUAGE_NAME = 'RUSSIAN';
const ACCOUNT_TEXT = 'МОЯ УЧЕТНАЯ ЗАПИСЬ';

describe('Phptravels', () => {
    it('change language', () => {
        phptravelsPage.open();
        phptravelsPage.navPanel.changeLanguage(LANGUAGE_ID);

        browser.waitUntil(
            () => browser.getUrl().includes(`/${LANGUAGE_ID}`),
            10000,
            `URL does not have path /${LANGUAGE_ID}`,
        );
        assert.equal(phptravelsPage.navPanel.changeLanguageDD.getText(), LANGUAGE_NAME);
        assert.equal(phptravelsPage.navPanel.myAccountBtn.getText(), ACCOUNT_TEXT);
    });
});
