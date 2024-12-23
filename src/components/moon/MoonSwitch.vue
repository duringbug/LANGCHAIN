<template>
<div>
    <NSwitch :rail-style="railStyle" @click="toggleTheme">
      <template #checked>
        {{ theme }}
      </template>
      <template #unchecked>
        {{ theme }}
      </template>
    </NSwitch>
</div>
</template>

  
<script setup lang="ts">
import {
    ref,
    onMounted,
    watch,
    type CSSProperties
} from 'vue'
import { NSwitch } from 'naive-ui';
// 1. 初始化状态，读取本地存储中的主题或默认使用系统主题
const theme = ref(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

// 2. 在组件挂载后，立即应用主题，确保在渲染时应用正确的主题
onMounted(() => {
    if (theme.value === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
    } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
    }
})

// 3. 监听 theme 的变化，并更新根元素的 CSS 变量
watch(theme, (newTheme) => {
    if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
    } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
    }

    // 将主题存储在本地存储中
    localStorage.setItem('theme', newTheme)
})

const railStyle = ({
    focused,
    checked
}: {
    focused: boolean;
    checked: boolean;
}) => {
    const style: CSSProperties = {}
    if (theme.value === 'dark') {
        style.background = 'black' // 暗黑模式时开关颜色
        if (focused) {
            style.boxShadow = '0 0 0 2px rgba(43, 108, 176, 0.4)' // 获取焦点时的阴影效果
        }
    } else {
        style.background = 'gray' // 光明模式时开关颜色
        if (focused) {
            style.boxShadow = '0 0 0 2px rgba(237, 242, 247, 0.4)' // 获取焦点时的阴影效果
        }
    }
    return style
}

// 4. 切换主题
const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

  
<style>
/* 光明模式 */
html.light {
    --bg-blue-color: rgb(206, 204, 204);
    --text-color: black;
    --bg-sky-color: rgba(245, 245, 245, 0.909);
}

/* 暗黑模式 */
html.dark {
    --bg-blue-color: rgb(31 41 55);
    --text-color: white;
    --bg-sky-color: rgb(75 85 99);
}
</style>
