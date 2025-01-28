<template>
  <div class="category-section flex-1 h-full">
    <div class="w-full mb-1 bg-gray-900">
      <header class="w-full mb-1">
        <h1 class="text-2xl font-bold text-center text-gray-500">
          {{ title }}
        </h1>
      </header>
      <!-- Filter Toggles Section -->
      <div class="w-full h-full mx-auto shadow-md rounded-lg p-2">
        <FilterToggles
            :filters="filters"
            :filterOptions="filterOptions"
            @filter-changed="updateFilters"
        />
      </div>
      <!-- Filtered Items Section -->
      <div class="w-full h-full mx-auto shadow-md rounded-lg p-2">
        <ItemList :items="filteredItems" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import FilterToggles from "./FilterToggles.vue";
import ItemList from "./ItemList.vue";
import { useFilters } from "@/model/useFilters";

export default defineComponent({
  name: "CategorySection",
  components: { FilterToggles, ItemList },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    filterOptions: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const items = computed(() => props.items);
    const filterOptions = computed(() => props.filterOptions);
    const { filters, updateFilters, filteredItems } = useFilters(items, filterOptions);

    return {
      filters,
      updateFilters,
      filteredItems,
    };
  },
});
</script>