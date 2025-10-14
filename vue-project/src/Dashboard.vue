<template>
  <!-- Main Content -->
  <main class="p-6 sm:ml-64 mt-16 bg-gray-100 font-sans">
    <div class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800">Dashboard Overview</h2>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div class="bg-white p-4 rounded-xl shadow border-blue-500 border-l-5">
        <h3 class="text-sm text-gray-500">Total Users</h3>
        <p class="text-2xl font-bold text-gray-800">1,245</p>
      </div>
      <div class="bg-white p-4 rounded-xl shadow border-green-500 border-l-5">
        <h3 class="text-sm text-gray-500">Revenue</h3>
        <p class="text-2xl font-bold text-gray-800">$23,980</p>
      </div>
      <div class="bg-white p-4 rounded-xl shadow border-yellow-500 border-l-5">
        <h3 class="text-sm text-gray-500">Orders</h3>
        <p class="text-2xl font-bold text-gray-800">320</p>
      </div>
      <div class="bg-white p-4 rounded-xl shadow border-purple-500 border-l-5">
        <h3 class="text-sm text-gray-500">Pending</h3>
        <p class="text-2xl font-bold text-gray-800">58</p>
      </div>
    </div>

    <!-- Charts -->
    <div class="flex flex-col lg:flex-row gap-6 mb-6">
      <!-- Apex Chart 1 (Bar) -->
      <div class="bg-white p-4 rounded-xl shadow w-full lg:w-1/2">
        <h2 class="font-semibold text-gray-700 mb-2">Sales Bar Chart</h2>
        <apexchart type="bar" height="300" :options="barChartOptions" :series="barSeries" />
      </div>

      <!-- Apex Chart 2 (Donut) -->
      <div class="bg-white p-4 rounded-xl shadow w-full lg:w-1/2">
        <h2 class="font-semibold text-gray-700 mb-2">Category Donut Chart</h2>
        <apexchart type="donut" height="300" :options="donutChartOptions" :series="donutSeries" />
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow overflow-scroll">
      <div class="p-4 border-b">
        <h3 class="font-semibold text-gray-700">Recent Orders</h3>
      </div>
      <table class="w-full text-left">
        <thead class="bg-gray-50 text-gray-600">
          <tr>
            <th class="py-3 px-4">Order ID</th>
            <th class="py-3 px-4">Customer</th>
            <th class="py-3 px-4">Amount</th>
            <th class="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="border-t">
            <td class="py-3 px-4">#1001</td>
            <td class="py-3 px-4">John Doe</td>
            <td class="py-3 px-4">$120</td>
            <td class="py-3 px-4 text-green-600">Completed</td>
          </tr>
          <tr class="border-t">
            <td class="py-3 px-4">#1002</td>
            <td class="py-3 px-4">Jane Smith</td>
            <td class="py-3 px-4">$89</td>
            <td class="py-3 px-4 text-yellow-600">Pending</td>
          </tr>
          <tr class="border-t">
            <td class="py-3 px-4">#1003</td>
            <td class="py-3 px-4">Mike Johnson</td>
            <td class="py-3 px-4">$340</td>
            <td class="py-3 px-4 text-red-600">Cancelled</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import ApexChart from "vue3-apexcharts";

// Register component (for <script setup>)
const apexchart = ApexChart;

// Bar Chart Data
const barSeries = ref([
  {
    name: "Sales",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 10],
  },
]);

const barChartOptions = ref({
  chart: {
    id: "bar-chart",
    type: "bar",
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
  colors: ["#3B82F6"],
  title: {
    text: "Monthly Sales Data",
    align: "center",
  },
});

// Donut Chart Data
const donutSeries = ref([44, 55, 41, 17, 100]);

const donutChartOptions = ref({
  chart: {
    type: "donut",
  },
  labels: ["Electronics", "Fashion", "Groceries", "Sports", "Baby Items"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 300,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
  legend: {
    position: "right",
    offsetY: 0,
  },
  title: {
    text: "Product Category Share",
    align: "center",
  },
});
</script>

<style scoped>

</style>
