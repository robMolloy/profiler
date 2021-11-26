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
  // computed,
  // reactive,
  ref,
  defineProps,
  defineEmits,
  watch,
} from 'vue';

import RmInputBase from 'src/components/generic/single/input/RmInputBase.vue';
// import { reass9 } from 'reass9';
// import { isEqual } from 'lodash';

const props = defineProps({ modelValue: { type: Object, default: () => ({}) } });
const emit = defineEmits(['update:modelValue']);

const formData = ref({});
// const formData = computed({
//   get: () => props.modelValue,
//   set: (value) => emit('update:modelValue', value),
// });
console.log(/*LL*/ 11, '123', 123);

watch(
  () => props.modelValue,
  // (newValue, oldValue) => { if (!isEqual(newValue, oldValue)) formData.value = newValue; },
  (newValue) => { formData.value = newValue; },
  { deep: true, immediate: true },
);

watch(
  () => formData,
  (newValue) => { emit('update:modelValue', newValue); },
  { deep: true },
);
</script>
