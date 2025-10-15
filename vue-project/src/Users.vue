<template>
  <Layout>
    <main class="p-6 sm:ml-64 mt-16 font-sans">
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-800">Users Overview</h2>
      </div>

     <div class="relative w-64 justify-center items-center">
    <!-- Search Icon -->
    <i
      class="fa-solid fa-magnifying-glass absolute left-3 top-5 -translate-y-1/2 text-gray-500"
    ></i>

    <!-- Search Input -->
    <input
      type="search"
      v-model="searchValue"
      placeholder="Search..."
      class="w-full mb-3 p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-0"
    />
  </div>
         
  <EasyDataTable
        show-index
        :items="items"
        :theme-color="'red'"
        :headers="headers"
        :search-field="searchField"
        :search-value="searchValue"
        :rows-per-page="rowsPerPage"
        buttons-pagination
      >
       
  <template #item-action="item">
    {{ item.action }} 
   <div class="flex gap-2">
    <div class=" text-xl cursor-pointer hover:text-green-700">
     <i class="fa-solid fa-pen-to-square"></i>
   </div>
    <div class=" text-xl cursor-pointer hover:text-red-700">
     <i class="fa-solid fa-trash"></i>
    </div>
    </div>
  </template>
  </EasyDataTable>
        
    </main>
  </Layout>
</template>

<script setup>
import { ref } from "vue";
import Layout from "./Layout.vue";
import EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";



const showPassword = ref(false);
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};



/* Search variables (Kept for search input to work) */
const searchField = ["player", "team", "number"];
const searchValue = ref("");
const rowsPerPage = ref(10);

/* Table headers */
const headers = ref([
  { text: "PLAYER", value: "player" },
  { text: "TEAM", value: "team" },
  { text: "NUMBER", value: "number" },
  { text: "POSITION", value: "position" },
  { text: "HEIGHT", value: "indicator.height" },
  { text: "ACTION", value: "action" }, 
]);

/* Table items */
const items = ref([
  { player: "Stephen Curry", team: "GSW", number: 30, position: "G", indicator: { height: "6-2", weight: 185 } },
  { player: "LeBron James", team: "LAL", number: 6, position: "F", indicator: { height: "6-9", weight: 250 } },
  { player: "Kevin Durant", team: "BKN", number: 7, position: "F", indicator: { height: "6-10", weight: 240 } },
  { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: "F", indicator: { height: "6-11", weight: 242 } },
  { player: "Jayson Tatum", team: "BOS", number: 0, position: "F", indicator: { height: "6-8", weight: 210 } },
]);

function deleteItem(item) {
  alert(`Delete clicked for ${item.player}`);
}
</script>