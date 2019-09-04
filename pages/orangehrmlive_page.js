class OrangehrmliveLoginPage {
    open() {
        browser.url('https://opensource-demo.orangehrmlive.com');
    }

    login(username, password) {
        this.usernameInput.waitAndSetValue(username);
        this.passwordInput.waitAndSetValue(password);

        this.loginBtn.waitAndClick();
    }

    get usernameInput() {
        return $('#txtUsername');
    }

    get passwordInput() {
        return $('#txtPassword');
    }

    get loginBtn() {
        return $('#btnLogin');
    }
}

module.exports = new OrangehrmliveLoginPage();
