<template>
  <div class="filter-toggles bg-gray-800 p-1 flex flex-col gap-1 rounded-lg shadow-lg">
    <div
        v-for="(options, filterType) in filterOptions"
        :key="filterType"
        class="filter-group flex flex-row gap-1"
    >
      <h4 class="font-bold text-gray-400">{{ filterType.toUpperCase() }}</h4>
      <div class="options-container flex flex-wrap gap-2">
        <label
            v-for="option in options"
            :key="option.value"
            class="flex items-center gap-1 text-gray-300 cursor-pointer text-base"
        >
          <input
              type="checkbox"
              :value="option.value"
              v-model="selectedFilters[filterType]"
              @change="emitFilterChanges"
              class="accent-green-400"
          />
          <span>{{ option.label }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, watch} from "vue";

interface FilterOption {
  value: string | number;
  label: string;
}

type FilterOptions = Record<string, FilterOption[]>;

export default defineComponent({
  name: "FilterToggles",
  props: {
    filters: {
      type: Object as PropType<Record<string, Array<string | number>>>,
      required: true,
    },
    filterOptions: {
      type: Object as PropType<FilterOptions>,
      required: true,
    },
  },
  emits: ["filter-changed"],
  setup(props, {emit}) {
    const selectedFilters = ref<Record<string, Array<string | number>>>(
        Object.keys(props.filterOptions).reduce((acc, key) => {
          acc[key] = [];
          return acc;
        }, {} as Record<string, Array<string | number>>)
    );

    watch(
        () => props.filters,
        (newFilters) => {
          selectedFilters.value = {...newFilters};
        },
        {deep: true, immediate: true}
    );

    const emitFilterChanges = () => {
      emit("filter-changed", {...selectedFilters.value});
    };

    return {
      selectedFilters,
      emitFilterChanges,
    };
  },
});
</script>
