class Datepicker {
    constructor() {
        this.selector = 'div.datepicker.dropdown-menu';
        this.style = 'display: block';
    }

    /**
     *
     * @param {number} day (from 1 to 31)
     * @param {string} month (abbreviation: Sep, Jan)
     * @param {number} year (format: XXXX)
     */
    setDate(day, month, year) {
        if (day) {
            this.dayBtn(day).waitAndClick();
        }
        if (month) {
            this.switchBtn('days').waitAndClick();
            this.monthBtn(month).waitAndClick();
        }
        if (year) {
            if (!day) {
                this.switchBtn('days').waitAndClick();
            }
            if (!month) {
                this.switchBtn('months').waitAndClick();
            }
            this.yearBtn(year).waitAndClick();
        }
    }

    /**
     *
     * @param {string} switchFrom (days,months,years)
     * @returns {Promise<WebdriverIOAsync.Element> | WebdriverIO.Element}
     */
    switchBtn(switchFrom) {
        return this.activeDatepicker().$(`.datepicker-${switchFrom} th.switch`);
    }

    dayBtn(day) {
        return this.activeDatepicker().$(`td=${day}`);
    }

    monthBtn(month) {
        return this.activeDatepicker().$(`span=${month}`);
    }

    yearBtn(year) {
        return this.activeDatepicker().$(`span=${year}`);
    }

    activeDatepicker() {
        let activePicker;

        browser.waitUntil(
            () => $$(this.selector).length > 1,
            10000,
            'Any datepickers on the page',
        );
        browser.waitUntil(
            () => {
                for (const datepicker of $$(this.selector)) {
                    if (datepicker.getAttribute('style').includes(this.style)) {
                        activePicker = datepicker;
                        return true;
                    }
                }
                return false
            },
            10000,
            'Any active datapickers on the page'
        );

        return activePicker;
    }

}

module.exports = new Datepicker();