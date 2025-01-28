<template>
  <div id="app" class="flex items-stretch min-h-screen bg-gray-950 p-2">
    <!-- Attackers Section -->
    <CategorySection
        title="Attackers"
        :items="attackersData.items"
        :filterOptions="attackersData.filterOptions"
    />
    <!-- Defenders Section -->
    <CategorySection
        title="Defenders"
        :items="defendersData.items"
        :filterOptions="defendersData.filterOptions"
    />
  </div>
  <!-- Footer Section -->
  <footer class="bg-gray-800 text-gray-200 text-center p-4">
    <div class="space-y-2">
      <p class="text-sm">
        <strong>Icons: </strong>
        <a href="https://github.com/marcopixel/r6operators">@marcopixel/r6operators</a>
      </p>
      <p class="text-sm">
        <strong>Data Collection Notice:</strong> No data collection
      </p>
    </div>
  </footer>

</template>

<script>
import CategorySection from "./components/CategorySection.vue";
import {attackersData, defendersData} from "./data/data.js";

export default {
  components: {
    CategorySection,
  },
  setup() {
    return {
      attackersData,
      defendersData,
    };
  },
};
</script>
