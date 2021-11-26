<template>
  <RmCardForm
    title="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <Test1FormContent v-model="formData" />
    <!-- <Test1FormContent
      :model-value="formData"
      @update:modelValue="(x)=>onUpdate(x)"
    /> -->
  </RmCardForm>
  <div>parent: {{ formData }}</div>
</template>

<script setup>
import { reactive } from 'vue';
import RmCardForm from 'src/components/generic/multi/RmCardForm.vue';
import Test1FormContent from 'src/components/multi/form-contents/Test1FormContent.vue';
import { reass9 } from 'reass9';

const formData = reactive({ input1: 'hello', input2: '' });

const onSubmit = () => console.log(/*LL*/ 24, 'formData', formData);
const onReset = () => { reass9(formData, {}); };

</script>
