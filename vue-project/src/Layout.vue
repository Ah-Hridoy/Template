<template>
  <!-- Navbar -->
  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3 flex items-center justify-between">
      <!-- Sidebar toggle button (mobile only) -->
      <button @click="toggleSidebar"
        class="inline-flex items-center p-2 text-sm text-gray-500 bg-gray-50 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all">
        <span class="sr-only">Toggle sidebar</span>

        <!-- Hamburger -->
        <!-- <svg
          v-if="!sidebarOpen"
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg> -->

        <span v-if="!sidebarOpen" class="text-lg">

          <font-awesome-icon icon="fa-solid fa-bars" />
        </span>


        <!-- Close -->
        <!-- <svg
          v-else
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          />
        </svg> -->
        <span v-else class="text-lg">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </span>

      </button>

      <!-- Logo -->
      <a href="#" class="flex items-center ms-2 md:me-24">
        <img src="./images/logo.svg" class="h-8 me-3" alt="Logo" />
      </a>

      <!-- User Dropdown -->
      <div class="flex items-center relative">
        <button @click="toggleDropdown" type="button"
          class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full" src="./images/avatar.png" alt="user photo" />
        </button>

        <!-- Dropdown -->
        <div v-show="isDropdownOpen"
          class="absolute right-0 top-full mt-2 w-48 bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ease-in-out transform origin-top">
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
  <div v-if="sidebarOpen" @click="toggleSidebar"
    class="fixed inset-0  z-30 sm:hidden transition-opacity duration-500 ease-in-out"></div>

  <!-- Sidebar -->
  <aside id="logo-sidebar" :class="[
    'fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 dark:bg-gray-800 transform transition-transform duration-500 ease-in-out',
    sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
  ]" aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto">
      <ul class="space-y-2 font-medium text-xl">
        <li>
          <a href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <a href="Dashboard.vue" class="ms-3">
              <i class="fa-solid fa-desktop"></i>
              Dashboard

            </a>
          </a>
        </li>
        <li>
          <a href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <a href="Order.vue" class="ms-3">
              <i class="fa-regular fa-file-lines"></i>
              Orders</a>
            <span
              class="ms-17 inline-flex items-center px-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">5</span>
          </a>
        </li>

        <!-- Accordion -->
        <li>
          <details class="group">
            <summary
              class="flex justify gap-3 items-center p-2 m rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
              <font-awesome-icon icon="fa-solid fa-cart-flatbed" />
              Products
              <span class="transition-transform duration-500 ml-15 group-open:rotate-180">▼</span>
            </summary>
            <p class=" ml-9 p-2 text-lg rounded-lg text-gray-600 hover:bg-gray-100">
              <a href="#">Products Create</a>
            </p>
            <p class=" ml-9 p-2 text-lg rounded-lg text-gray-600 hover:bg-gray-100">
              <a href="#">Products Lists</a>
            </p>
          </details>
        </li>

        <li>
          <a href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <font-awesome-icon icon="fa-solid fa-users" />
            <a href="#" class="ms-3">Users</a>
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

<style scoped></style>
