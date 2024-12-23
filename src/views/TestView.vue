<template>
<div>
    <h1>LangChain RAG Demo</h1>
    <input class="bg-gray-500" v-model="toolInput" placeholder="Enter your query (e.g., 介绍下我的故乡江油)" />
    <button @click="runAgent">Run Agent</button>

    <div v-if="resultData">
        <h2>Response:</h2>
        <p>{{ resultData }}</p>
    </div>
</div>
</template>

<script setup lang="ts">
import {
    ref
} from 'vue';
import axios from 'axios';

// 初始化响应步骤和输入字段
const toolInput = ref < string > ('介绍下我的故乡江油');

// 定义结果数据的响应式引用
const resultData = ref < string | null > (null);

// 定义运行代理逻辑
const runAgent = async () => {
    try {
        const response = await axios.post('http://localhost:3000/api/ask', {
            question: toolInput.value // 发送 toolInput.value 作为 question 到后端
        });
        // 假设返回的数据是一个简单的字符串或对象，可以根据后端返回的格式调整
        resultData.value = response.data.answer || '没有返回正确的答案'; // 假设答案在 response.data.answer 中
    } catch (error) {
        resultData.value = '请求失败，请稍后再试';
    }
};
</script>

<style scoped>

</style>
