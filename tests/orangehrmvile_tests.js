const assert = require('chai').assert;
const orangehrmvileLoginPage = require('../pages/orangehrmlive_page');

const USER_CREDENTIALS = { name: 'Admin', password: 'admin123'};
const URL_PATTERN = '*auth/validateCredentials';

describe('Orangehrmvile', () => {
    it('user should be able to login in', () => {
        let actualCredentials = {};

        // intercept the ‘validateCredentials’ event
        browser.cdp('Network', 'enable');
        browser.cdp(
            'Network',
            'setRequestInterception',
            { patterns: [{ urlPattern: URL_PATTERN }]},
        );
        browser.on('Network.requestIntercepted', (params) => {
            actualCredentials.name = params.request.postData.match(/Username=([\w]*)&/)[1];
            actualCredentials.password = params.request.postData.match(/Password=([\w]*)&/)[1];
            browser.cdp(
                'Network',
                'continueInterceptedRequest',
                { interceptionId: params.interceptionId }
            );
        });

        orangehrmvileLoginPage.open();
        orangehrmvileLoginPage.login(USER_CREDENTIALS.name, USER_CREDENTIALS.password);

        assert.ownInclude(
            USER_CREDENTIALS,
            actualCredentials,
            'Credentials are not equivalent submitted',
        );
    });
});
