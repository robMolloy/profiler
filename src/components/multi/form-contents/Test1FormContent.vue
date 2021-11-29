<template>
  <RmInputBase
    v-model="formData.input1"
    label="input1"
  />
  <RmInputBase
    v-model="formData.input2"
    label="input2"
  />
</template>

<script setup>
import {
  ref,
  defineProps,
  defineEmits,
  watch,
} from 'vue';

import RmInputBase from 'src/components/generic/single/input/RmInputBase.vue';

const props = defineProps({ modelValue: { type: Object, default: () => ({}) } });
const emit = defineEmits(['update:modelValue']);

const formData = ref({});

watch(
  () => props.modelValue,
  (newValue) => { formData.value = newValue; },
  { deep: true, immediate: true },
);

watch(
  () => formData,
  (newValue) => { emit('update:modelValue', newValue); },
  { deep: true },
);
</script>
