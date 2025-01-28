import {computed, ComputedRef, ref} from 'vue';
import {Item} from "@/model/Item";
import {FilterOptions} from "@/model/FilterOptions";

interface Filters {
    features: string[];
    speed: string[];
}

export function useFilters(items: ComputedRef<Item[]>, filterOptions: ComputedRef<FilterOptions>) {
    const filters = ref<Filters>({
        features: [], speed: [],
    });

    const updateFilters = (newFilters: Filters) => {
        filters.value = newFilters;
    };

    const isItemVisible = (item: Item): boolean => {
        const {value: {features, speed}} = filters;
        return ((features.length === 0 || item.features.some(
            feature => features.includes(feature))) && (speed.length === 0 || speed.includes(item.speed))
        );
    };

    const getFilteredItems = (): Item[] => {
        return items.value.map(item => ({
            ...item, filteredOut: !isItemVisible(item),
        }));
    };

    const filteredItems = computed(getFilteredItems);

    return {filters, updateFilters, filteredItems, filterOptions};
}