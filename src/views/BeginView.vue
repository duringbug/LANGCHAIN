<template>
    <div class="flex flex-col items-center justify-center space-y-6 h-full">
        <h2 class="text-4xl font-extrabold text-gray-800"
            style="font-family: 'Poppins', sans-serif; letter-spacing: 1px; line-height: 1.5; text-shadow: 2px 2px 4px rgba(0, 0, 255, 0.3), 4px 4px 6px rgba(75, 0, 130, 0.3);">
            AI Chat
        </h2>
        <p class="text-lg text-gray-600">云计算 RAG</p>
        <!-- Button with animation and shadow -->
        <button
            class="px-6 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none">
            <RouterLink to="/chat" class="hover:text-gray-400 transition-colors text-lg">点击开始</RouterLink>
        </button>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped></style>