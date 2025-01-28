<template>
  <div id="app" class="flex flex-col md:flex-row items-stretch justify-center bg-gray-950 p-2">
    <!-- Attackers Section -->
    <CategorySection
        title="Attackers"
        :items="attackersData.items"
        :filterOptions="attackersData.filterOptions"
        class="flex-1"
    />
    <!-- Defenders Section -->
    <CategorySection
        title="Defenders"
        :items="defendersData.items"
        :filterOptions="defendersData.filterOptions"
        class="flex-1"
    />
  </div>
  <!-- Footer Section -->
  <footer class="flex-shrink-0 bg-gray-800 text-gray-200 text-center p-4">
    <div class="space-y-2">
      <p class="text-sm">
        <strong>Icons: </strong>
        <a href="https://github.com/marcopixel/r6operators">@marcopixel/r6operators</a>
      </p>
      <p class="text-sm">
        <strong>Source code: </strong>
        <a href="https://github.com/drunckoder/r6ops">@drunckoder/r6ops</a>
      </p>
      <p class="text-sm">
        <strong>Data Collection:</strong> None
      </p>
      <p class="text-sm">
        <strong>Copyright Notice: </strong> This project is not affiliated with Ubisoft. All trademarks and registered trademarks are the property of their respective owners.  All artwork and character designs are the property of their respective owners.
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

<style scoped>
@media (min-width: 768px) {
  #app {
    flex-direction: row;
  }
}
</style>