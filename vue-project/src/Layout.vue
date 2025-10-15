<template>
  <!-- Navbar -->
  <nav
    class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3 flex items-center justify-between">
      <!-- Sidebar toggle button (mobile only) -->
      <button
        @click="toggleSidebar"
        class="inline-flex items-center p-2 text-sm text-gray-500 bg-gray-50 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 transition-all"
      >
        <span class="sr-only">Toggle sidebar</span>

        <span v-if="!sidebarOpen" class="text-lg">
          <i class="fa-solid fa-bars"></i>
        </span>

        <span v-else class="text-lg">
          <i class="fa-solid fa-xmark"></i>
        </span>
      </button>

      <!-- Logo -->
      <a href="#" class="flex items-center ms-2 md:me-24">
        <img src="./images/logo.svg" class="h-8 me-3" alt="Logo" />
      </a>

      <!-- User Dropdown -->
      <div class="flex items-center relative">
        <button
          @click="toggleDropdown"
          type="button"
          class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full" src="./images/avatar.png" alt="user photo" />
        </button>

        <!-- Dropdown -->
        <div
          v-show="isDropdownOpen"
          class="absolute right-0 top-full mt-2 w-48 bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ease-in-out transform origin-top"
        >
          <div class="px-4 py-3">
            <p class="text-sm text-gray-900 dark:text-white">Neil Sims</p>
            <p class="text-sm font-medium text-gray-500 truncate dark:text-gray-300">
              neil.sims@flowbite.com
            </p>
          </div>
          <ul class="py-1 text-gray-700 dark:text-gray-300">
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Dashboard</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Settings</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Earnings</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile overlay -->
  <div
    v-if="sidebarOpen"
    @click="toggleSidebar"
    class="fixed inset-0 z-30 sm:hidden transition-opacity duration-500 ease-in-out"
  ></div>

  <!-- Sidebar -->
  <aside
    id="logo-sidebar"
    :class="[
      'fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 dark:bg-gray-800 transform transition-transform duration-500 ease-in-out',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
    ]"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 text-lg font-bold overflow-y-auto">
      <ul class="space-y-2 font-medium text-gray-700 dark:text-gray-300">
        <!-- Dashboard -->
        <li>
          <a
            href="Dashboard.vue"
            class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            <i class="fa-solid fa-desktop w-5 text-center"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <!-- Orders -->
        <li>
          <a
            href="Order.vue"
            class="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            <div class="flex items-center gap-3">
              <i class="fa-regular fa-file-lines w-5 text-center"></i>
              <span>Orders</span>
            </div>
            <span
              class="inline-flex items-center justify-center px-2 text-xs font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
              >5</span
            >
          </a>
        </li>

        <!-- Products Accordion -->
        <li>
          <details class="group">
            <summary
              class="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              <div class="flex items-center gap-3">
                <i class="fa-solid fa-basket-shopping w-5 text-center"></i>
                <span>Products</span>
              </div>
              <span class="transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>

            <ul class="mt-2 ml-8 space-y-1">
              <li>
                <a
                  href="#"
                  class="block p-2 text-sm rounded-lg text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >Products Create</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block p-2 text-sm rounded-lg text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >Products Lists</a
                >
              </li>
            </ul>
          </details>
        </li>

        <!-- Users -->
        <li>
          <a
            href="#"
            class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            <i class="fa-solid fa-users w-5 text-center"></i>
            <span>Users</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <slot></slot>
</template>

<script setup>
import { ref } from "vue";

const sidebarOpen = ref(false);
const isDropdownOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>

</style>
