<template>
<div class="flex h-screen">
    <!-- Left Sidebar -->
    <div :class="sidebarClass" class="content-blue h-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-r-3xl shadow-lg" @mouseover="showCancelIcon" @mouseleave="hideCancelIcon">
        <div class="flex items-center justify-between">
            <h2 v-if="!isSidebarCollapsed" class="text-xl font-semibold text-white ml-8">HOME</h2>
            <button @click="toggleSidebar" class="p-2 text-white hover:text-gray-300 focus:outline-none">
                <span v-if="isSidebarCollapsed">
                    <CollapsibleSidebarIcon :size="'32'" />
                </span>
                <span v-else>
                    <CancelIcon v-if="showCancel" :size="'20'" />
                </span>
            </button>
        </div>
        <div class="flex pl-3 mt-4">
            <div v-if="!isSidebarCollapsed" class="text-white space-y-4">
                <p class="cursor-pointer hover:text-gray-200" @click="createChatBox('Item 1')">Item 1</p>
                <p class="cursor-pointer hover:text-gray-200" @click="createChatBox('Item 2')">Item 2</p>
                <p class="cursor-pointer hover:text-gray-200" @click="createChatBox('Item 3')">Item 3</p>
                <p class="cursor-pointer hover:text-gray-200" @click="createChatBox('Item 4')">Item 4</p>
                <MoonSwitch v-show="!isSidebarCollapsed" class="mt-6" />
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="content-sky flex-1 p-6 bg-gradient-to-t from-indigo-100 to-white rounded-l-3xl">
        <div class="flex flex-col items-center justify-center space-y-6">
            <h2 class="text-3xl font-bold text-gray-800">AI Chat</h2>
            <div v-for="(chat, index) in chatItems" :key="index" class="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl mb-6">
                <div class="flex flex-col space-y-4">
                    <div class="p-4 rounded-lg bg-blue-50 text-blue-900 shadow-md">
                        <p class="text-lg">{{ chat.name }}: Hello! How can I assist you today?</p>
                    </div>
                    <!-- Chat Input -->
                    <div class="flex items-center space-x-2 mt-4">
                        <input v-model="chat.message" type="text" class="flex-1 p-3 rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="Type your message..." />
                        <button @click="sendMessage(index)" class="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 focus:outline-none">
                            <span class="material-icons">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
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
// 聊天框列表
const chatItems = ref < {
    name: string;message: string
} [] > ([]);

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

// 创建新的聊天框
const createChatBox = (itemName: string) => {
    chatItems.value.push({
        name: itemName,
        message: ''
    });
};

// 发送消息
const sendMessage = (index: number) => {
    // 这里你可以添加消息发送的逻辑
    console.log(`Message sent from ${chatItems.value[index].name}: ${chatItems.value[index].message}`);
    // 清空输入框
    chatItems.value[index].message = '';
};
</script>

  
<style lang="css" scoped>
/* 侧边栏样式 */
.content-blue {
    background: linear-gradient(to right, #3b82f6, #9333ea);
    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.1);
}

.content-sky {
    background: linear-gradient(to top, #dbeafe, #ffffff);
}

/* 美化按钮和图标 */
button:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
}

button:focus {
    outline: none;
}

input:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
}
</style>
