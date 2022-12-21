{
    let filter = null;
    
    let filterContainer = document.querySelector('[data-filter]');
    if(filterContainer) {
        let btnClearSelectedFilters = document.querySelector('[data-clear-selected-filters]');
        let selectedFilterList = document.querySelector('.hero-filter__selected-filters-list');
        filter = new Filter(filterContainer, 4, {
            duplicateSelectedButtons: selectedFilterList,
            clearAllBtn: btnClearSelectedFilters,
        });
    }
}