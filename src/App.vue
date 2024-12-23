<script setup lang="ts">
import {
    RouterLink,
    RouterView
} from 'vue-router'
import {
    NConfigProvider,
    NButton,
    NGlobalStyle
} from 'naive-ui';
</script>

<template>
<NConfigProvider :theme-overrides="{
      common: {
        fontFamily: 'sans-serif' // 你想要的字体
      }
    }">
    <NGlobalStyle />
    <header>
        <div class="wrapper content-blue">
            <nav>
                <RouterLink to="/test">Test</RouterLink>
                <RouterLink to="/">Home</RouterLink>
            </nav>
        </div>
    </header>
    <Suspense>
        <RouterView />
    </Suspense>
</NConfigProvider>
</template>

<style>
</style>
