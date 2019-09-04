const navigationPanel = require('./block/navigation_panel');

class PhpTravelsSearchPage {
    constructor() {
        this.navPanel = navigationPanel;
    }

    get isEmptyList() {
        this.resultsBlock.waitForDisplayed();
        return !!$(`${this.resultsBlock.selector} h4`).isDisplayed();
    }

    get resultsBlock() {
        return $('div.flights_list');
    }

}

module.exports = new PhpTravelsSearchPage();
