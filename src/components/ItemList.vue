<template>
  <div class="grid grid-cols-7 auto-rows-fr gap-1 bg-gray-800">
    <div
        v-for="item in items"
        :key="item.name"
        class="border border-gray-300 p-1 rounded-md"
        :class="{ 'opacity-20': item.filteredOut }"
    >
      <div
          class=""
          v-if="item.icon && typeof item.icon === 'string'"
          v-html="item.icon"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {Item} from '@/model/Item';

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Item[]>,
      required: true,
    },
  },
});
</script>
