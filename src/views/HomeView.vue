<template>
<div class="flex h-screen">
    <!-- Left Sidebar -->
    <div :class="sidebarClass" class="content-blue h-full transition-all duration-300" @mouseover="showCancelIcon" @mouseleave="hideCancelIcon">
        <div class="flex items-center justify-between p-4">
            <h2 v-if="!isSidebarCollapsed" class="text-xl font-semibold ml-20">HOME</h2>
            <button @click="toggleSidebar" class=" justify-center">
                <span v-if="isSidebarCollapsed">
                    <CollapsibleSidebarIcon :size="'32'" />
                </span>
                <span v-else>
                    <CancelIcon v-if="showCancel" :size="'20'" />
                </span>
            </button>
        </div>
        <div class="flex pl-3">
            <div v-if="!isSidebarCollapsed" class="justify-start">
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
                <p>Item 4</p>
                <MoonSwitch v-show="!isSidebarCollapsed"></MoonSwitch>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="content-sky flex-1 p-6">
        <h2 class="text-3xl font-bold">Main Content</h2>
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
import MoonSwitch from '@/components/moon/MoonSwitch.vue';

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
/* 你可以在这里为侧边栏添加自定义样式 */
</style>
