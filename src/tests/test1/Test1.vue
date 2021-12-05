<template>
  <RmCardForm
    title="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <Test1FormContent v-model="formData" />
  </RmCardForm>
  <div>parent: {{ formData }}</div>

  <div>arr1: {{ arr1 }}</div>
  <button @click="reassignArr">
    reassign Array
  </button>

  <div>obj1: {{ obj1 }}</div>
  <button @click="reassignObj">
    reassign Object
  </button>

  <div>formData: {{ formData }}</div>
  <button @click="reassignFormData">
    reassign formData
  </button>
</template>

<script setup>
import { reactive } from 'vue';
import RmCardForm from 'src/components/generic/multi/RmCardForm.vue';
import Test1FormContent from 'src/components/multi/form-contents/Test1FormContent.vue';
import { reass9 } from 'reass9';

const formData = reactive({ input1: 'hello', input2: '' });

const arr1 = reactive([1, 2, 3, 4, 5, 6]);
const obj1 = reactive({ hi: 'bye', hello: 'goodbye' });

const reassignArr = () => reass9(arr1, [7, 8]);
const reassignObj = () => reass9(obj1, { bonjour: 'aurevoir' });
const reassignFormData = () => reass9(formData, { });

const onSubmit = () => console.log(/*LL*/ 109, 'formData', formData);
const onReset = () => reassignFormData();
</script>
