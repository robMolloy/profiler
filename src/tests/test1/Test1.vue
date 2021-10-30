<template>
  <RmCardForm
    title="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <RmInputBase
      v-model="formData.input1"
      label="input1"
    />
    <RmInputBase
      v-model="formData.input2"
      label="input2"
    />
  </RmCardForm>

  <RmButtonBase @click="open1=true">
    Open 1
  </RmButtonBase>

  <RmDialogCard
    v-model="open1"
    title="some dialog"
  >
    <RmInputBase
      v-model="formData.input1"
      label="input1"
    />
    <RmInputBase
      v-model="formData.input2"
      label="input2"
    />
  </RmDialogCard>

  <RmButtonBase @click="open2=true">
    Open 2
  </RmButtonBase>

  <RmDialogForm
    v-model="open2"
    title="some dialog"
    @submit="onSubmit"
    @reset="onReset"
  >
    <RmInputBase
      v-model="formData.input1"
      label="input1"
    />
    <RmInputBase
      v-model="formData.input2"
      label="input2"
    />
  </RmDialogForm>
</template>

<script setup>
import { ref, reactive } from 'vue';

import RmButtonBase from 'src/components/generic/single/buttons/RmButtonBase.vue';
import RmCardForm from 'src/components/generic/multi/RmCardForm.vue';
import RmInputBase from 'src/components/generic/single/input/RmInputBase.vue';
import RmDialogForm from 'src/components/generic/multi/RmDialogForm.vue';
import RmDialogCard from 'src/components/generic/single/dialogs/RmDialogCard.vue';

const onSubmit = () => console.log(/*LL*/ 46, 'submit');
const onReset = () => console.log(/*LL*/ 47, 'reset');

const formData = reactive({ input1: '', input2: '' });
const open1 = ref(false);
const open2 = ref(false);

</script>
