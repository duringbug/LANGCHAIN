<template>
    <div 
      class="flex items-center space-x-4"
      @click="toggle"
    >
      <!-- 开关 -->
      <div 
        class="relative inline-block w-12 h-6 cursor-pointer rounded-full"
        :class="isChecked ? 'bg-blue-500' : 'bg-gray-300'"
      >
        <!-- 小圆圈 -->
        <div 
          class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out"
          :class="isChecked ? 'transform translate-x-6' : ''"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  
  // 接收父组件传递的初始状态
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    }
  });
  
  // 用来控制开关的状态
  const isChecked = ref(props.modelValue);
  
  // 触发事件，将状态同步到父组件
  const emit = defineEmits(['update:modelValue']);
  
  const toggle = () => {
    isChecked.value = !isChecked.value;
    emit('update:modelValue', isChecked.value);  // 向父组件传递新的状态
  };
  </script>
  
  <style scoped>
  /* Scoped样式，不会影响到其他组件 */
  </style>
  