export default (items) => {
    return {
        items: items,
        years: [],
        selectedYear: null,
        dropdown: false,

        init() {
            this.getYears();
        },

        getYears() {
            const yearSet = new Set();
            this.items.forEach(item => {
                const year = new Date(item.when_published).getFullYear();
                yearSet.add(year);
            });
            this.years = Array.from(yearSet);
            this.years.sort((a, b) => b - a);
            this.years.unshift(null);
        },

        selectYear(year) {
            this.selectedYear = year;
        },

        filteredItems() {
            if (this.selectedYear === null) {
                return this.items;
            }
            return this.items.filter(item => {
                return new Date(item.when_published).getFullYear() === this.selectedYear;
            });
        },
        yearLabel(year) {
            return year === null ? 'All' : year;
        },

        open() {
            this.dropdown = true;
        },

        close() {
            this.dropdown = false;
        },

        toggle() {
            this.dropdown = !this.dropdown;
        },

        formatDate(dateString) {
            const date = new Date(dateString);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }
    };
};
