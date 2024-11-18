<template>    
    <span class="inline-flex items-center gap-x-1.5 rounded-full bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-70 mr-2">
        <svg class="size-1.5 fill-purple-500" viewBox="0 0 6 6" aria-hidden="true">
            <circle cx="3" cy="3" r="3" />
        </svg>
        {{ title }}
    </span>
</template>

<script setup lang="ts">

const { title } = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>