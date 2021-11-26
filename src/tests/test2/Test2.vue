<template>
  <RmCardForm
    title="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <Test1FormContent v-model="formData" />
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

  <RmButtonBase @click="open3=true">
    Open 3
  </RmButtonBase>

  <q-dialog v-model="open3">
    <RmCardForm
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
    </RmCardForm>
  </q-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { reass9 } from 'reass9';

import RmButtonBase from 'src/components/generic/single/buttons/RmButtonBase.vue';
import RmCardForm from 'src/components/generic/multi/RmCardForm.vue';
import RmInputBase from 'src/components/generic/single/input/RmInputBase.vue';
import RmDialogForm from 'src/components/generic/multi/RmDialogForm.vue';
import RmDialogCard from 'src/components/generic/single/dialogs/RmDialogCard.vue';
import Test1FormContent from 'src/components/multi/form-contents/Test1FormContent.vue';

const initFormData = { input1: '', input2: '' };
const formData = reactive({ ...initFormData });

const onSubmit = () => console.log(formData);
const onReset = () => reass9(formData, { ...initFormData });

const open1 = ref(false);
const open2 = ref(false);
const open3 = ref(false);

</script>
