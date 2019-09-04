class NavigationPanel {
    constructor() {
        this.selector = 'nav'
    }

    changeLanguage(id) {
        this.changeLanguageDD.waitForDisplayed();
        this.changeLanguageDD.moveTo();
        this.languageBtn(id).waitAndClick();
    }

    languageBtn(id) {
        browser.waitUntil(
            () => {
                console.log(this.languageList.getAttribute('style'));
                return this.languageList.getAttribute('style').includes('display: block');
            },
            10000,
            'LanguageList is not visible'
        );
        return $(`${this.languageList.selector} a#${id}`);
    }

    get myAccountBtn() {
        return $(`${this.sideBar.selector} #li_myaccount`);
    }

    get languageList() {
        return this.sideBar.$(`${this.sideBar.selector} ul.nav.navbar-nav ul.dropdown-menu`);
    }

    get changeLanguageDD() {
        return $(`${this.sideBar.selector} ul.nav.navbar-nav`);
    }

    get sideBar() {
        return $(`${this.selector} ul.navbar-side`);
    }
}

module.exports = new NavigationPanel();