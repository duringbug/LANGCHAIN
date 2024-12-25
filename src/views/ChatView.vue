<template>
    <div class="h-screen overflow-y-scroll bg-gray-200 flex flex-col justify-between">
        <!-- 聊天内容区域 -->
        <div class="flex-1 space-y-4 relative">
            <!-- 消息列表 -->
            <div class="mb-[100px]">
                <div v-for="(message, index) in messages" :key="index" class="flex pt-4 px-10">
                    <!-- 接收者的消息 -->
                    <div v-if="message.isSender" class="ml-auto max-w-xs bg-sky-500 text-white p-3 rounded-[12px] shadow-md relative break-words">
                        <p>{{ message.text }}</p>
                        <!-- 气泡下角 -->
                        <div class="absolute bottom-0 right-0 w-0 h-0 border-l-8 border-t-8 border-l-sky-500 border-t-transparent"></div>
                    </div>

                    <!-- 发送者的消息 -->
                    <div v-else class="mr-auto max-w-xs bg-purple-500 text-white p-3 rounded-[12px] shadow-md relative break-words">
                        <p>{{ message.text }}</p>
                        <!-- 气泡下角 -->
                        <div class="absolute bottom-0 left-0 w-0 h-0 border-r-8 border-t-8 border-r-purple-500 border-t-transparent"></div>
                    </div>
                </div>
            </div>
            
        
            <!-- 输入区域 -->
            <div class="p-4 bg-white flex items-center shadow-lg rounded-t-xl absolute w-full bottom-0">
                <input v-model="newMessage" type="text" placeholder="询问ai..."
                    class="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button :disabled="!canSendMessage" @click="sendMessage"
                    class="ml-4 bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purple-500">
                    Send
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { computed, ref } from 'vue';

// 消息列表
const messages = ref([
    { text: 'Hi there!', isSender: true },
    { text: 'Hello! How are you?', isSender: false },
]);

// 当前输入的消息
const newMessage = ref('');

// 判断是否可以发送消息
const canSendMessage = computed(() => {
  // 检查最后一条消息的 isSender 是否为 true
  return messages.value[messages.value.length - 1]?.isSender === false;
});

let backendHost = import.meta.env.VITE_BACKEND_HOST
let backendPort = import.meta.env.VITE_BACKEND_PORT

// 尝试从 /config 接口获取动态配置
try {
    const config = await axios.get('/config');
    if (config.status === 200) {
        backendHost = config.data.backendHost;
        backendPort = config.data.backendPort;
    }
} catch (error) {
    console.error('Failed to fetch configuration:', error);
}

// 发送消息
const sendMessage = async () => {
    messages.value.push({
            text: newMessage.value,
            isSender: true,
        });
    if (newMessage.value.trim()) {
        try {
            const response = await axios.post(`http://${backendHost}:${backendPort}/api/ask`, {
                question: newMessage.value // 发送 toolInput.value 作为 question 到后端
            });
            messages.value.push({
                text: response.data.answer.trim() || '没有返回正确的答案',
                isSender: false,
            });
        } catch (error) {
            // 类型保护，检查 error 是否为 AxiosError
            if (axios.isAxiosError(error)) {
                // 提取 Axios 错误信息
                const errorMessage = error.response?.data?.message || error.message || '请求失败，请稍后再试';
                messages.value.push({
                    text: `请求失败: ${errorMessage}`,
                    isSender: false,
                });
            } else {
                // 处理非 Axios 错误的情况
                messages.value.push({
                    text: '请求失败，请稍后再试',
                    isSender: false,
                });
            }
        }
    }
};
</script>

<style scoped>
/* 自定义样式，可以根据需要调整 */
</style>