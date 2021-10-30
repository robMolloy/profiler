<template>
  <RmDialogBase>
    <RmCardForm
      :title="title"
      @submit="(...props)=>$emit('submit', ...props)"
      @reset="(...props)=>$emit('reset', ...props)"
    >
      <slot />
      <template #headerRight>
        <RmIconClose v-close-popup />
      </template>
    </RmCardForm>
  </RmDialogBase>
</template>

<script setup>
import { useAttrs, defineEmits } from 'vue';

import RmIconClose from '../single/icons/RmIconClose.vue';
import RmCardForm from './RmCardForm.vue';
import RmDialogBase from '../single/dialogs/RmDialogBase.vue';

const { title } = useAttrs();
defineEmits(['submit', 'reset']);
</script>
