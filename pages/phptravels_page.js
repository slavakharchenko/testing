const phptravelsSearchPage = require('./phptravels_search_page');
const navigationPanel = require('./block/navigation_panel');
const datepicker = require('./elements/datepicker');

class PhpTravelsPage {
    constructor() {
        this.navPanel = navigationPanel;
    }

    open() {
        browser.url('https://www.phptravels.net/');
    }

    fillRandomAirports(origin, destination) {
        this.originAirportInput.waitAndSetValue(origin);
        this.selectFirstAirport();

        this.destinationAirportInput.waitAndSetValue(destination);
        this.selectFirstAirport();
    }

    selectFirstAirport() {
        browser.waitUntil(
            () => this.airportsList.length > 1,
            10000,
            'No airport',
        );
        this.airportsList[0].waitAndClick();
    }

    submitSearch() {
        this.submitButton.waitAndClick();
        return phptravelsSearchPage;
    }

    getDatepicker() {
        $("input#departure").waitAndClick();
        return datepicker;
    }

    get airportsList() {
        return $$('#select2-drop.select2-drop-active li');
    }

    get destinationAirportInput() {
        return $(`${this.flightForm.selector} div#s2id_destination input`);
    }

    get originAirportInput() {
        return $(`${this.flightForm.selector} div#s2id_origin input`);
    }

    get roundTripCheckbox() {
        return $(`${this.flightForm.selector} label[data-type="round"]`);
    }

    get submitButton() {
        return $(`${this.flightForm.selector} button[type="submit"]`);
    }

    get flightForm() {
        return $(`${this.searchSection.selector} form#thflights`);
    }

    get flightBtn() {
        return $(`${this.searchSection.selector} li[data-title="thflight"]`);
    }

    get searchSection() {
        return $('section.hero-section');
    }

}

module.exports = new PhpTravelsPage();
