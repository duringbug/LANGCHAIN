<template>
    
    <div class="flex h-screen bg-gray-100">
      <!-- Left Sidebar -->
      <div :class="sidebarClass" class="content-blue h-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-xl relative"
        @mouseover="showCancelIcon" @mouseleave="hideCancelIcon">
        <div class="flex flex-col items-center justify-between">
          <div class="flex items-center justify-between w-full">
            <h2 v-if="!isSidebarCollapsed" class="text-xl font-semibold text-white">历史记录</h2>
            <button @click="toggleSidebar" class="text-white hover:text-gray-300 focus:outline-none rounded-full、 transition-all duration-200 hover:bg-white/20">
              <span v-if="isSidebarCollapsed">
                <CollapsibleSidebarIcon :size="'32'" />
              </span>
              <span v-else>
                <CancelIcon v-if="showCancel" :size="'20'" />
              </span>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="content-sky flex-1 bg-gradient-to-t from-indigo-100 h-screen to-white">
        <Suspense>
            <RouterView />
        </Suspense>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import {
      computed,
      ref
  } from 'vue';
  import CollapsibleSidebarIcon from '../components/icons/CollapsibleSidebarIcon.vue';
  import CancelIcon from '../components/icons/CancelIcon.vue';

  
  // 状态：控制左侧栏是否折叠
  const isSidebarCollapsed = ref(false);
  // 控制 CancelIcon 是否可见
  const showCancel = ref(false);
  
  // 计算属性：根据是否折叠改变类名
  const sidebarClass = computed(() => {
      return isSidebarCollapsed.value ? 'w-16' : 'w-64';
  });
  
  // 切换左侧栏折叠状态
  const toggleSidebar = () => {
      isSidebarCollapsed.value = !isSidebarCollapsed.value;
  };
  
  // 显示 CancelIcon
  const showCancelIcon = () => {
      showCancel.value = true;
  };
  
  // 隐藏 CancelIcon
  const hideCancelIcon = () => {
      showCancel.value = false;
  };
  </script>
  
  <style lang="css" scoped>
  /* 侧边栏样式 */
  .content-blue {
    background: linear-gradient(to bottom right, #9333ea, #3b82f6);
    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.1);
  }
  
  
  input:focus {
      border-color: #6366f1;
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
  }
  </style>
  