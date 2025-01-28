import { computed, ref } from 'vue';
export function useFilters(items, filterOptions) {
    const filters = ref({
        features: [], speed: [],
    });
    const updateFilters = (newFilters) => {
        filters.value = newFilters;
    };
    const isItemVisible = (item) => {
        const { value: { features, speed } } = filters;
        return ((features.length === 0 || item.features.some(feature => features.includes(feature))) && (speed.length === 0 || speed.includes(item.speed)));
    };
    const getFilteredItems = () => {
        return items.value.map(item => ({
            ...item, filteredOut: !isItemVisible(item),
        }));
    };
    const filteredItems = computed(getFilteredItems);
    return { filters, updateFilters, filteredItems, filterOptions };
}
//# sourceMappingURL=useFilters.js.map