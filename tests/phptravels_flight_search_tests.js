const assert = require('chai').assert;
const phptravelsPage = require('../pages/phptravels_page');

const ORIGIN_CITY = 'Paris';
const DESTINATION_CITY = 'London';

describe('Phptravels', () => {
    it('change language', () => {
        phptravelsPage.open();
        phptravelsPage.flightBtn.waitAndClick();
        phptravelsPage.roundTripCheckbox.waitAndClick();
        phptravelsPage.fillRandomAirports(ORIGIN_CITY, DESTINATION_CITY);
        const datepicker = phptravelsPage.getDatepicker();
        datepicker.setDate(undefined, undefined, 2020);
        datepicker.setDate(undefined, undefined, 2020);
        const phpSearchTravels = phptravelsPage.submitSearch();

        assert.isFalse(
            phpSearchTravels.isEmptyList,
            'Search list is empty',
        );
    });
});
