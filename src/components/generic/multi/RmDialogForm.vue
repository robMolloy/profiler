<template>
  <RmDialogCardHeader>
    <RmForm
      @submit="(...props)=>$emit('submit',...props)"
      @reset="(...props)=>$emit('reset',...props)"
    >
      <slot />
    </RmForm>
  </RmDialogCardHeader>
</template>

<script setup>
import { defineEmits } from 'vue';
import RmDialogCardHeader from '../single/dialogs/RmDialogCardHeader.vue';
import RmForm from './RmForm.vue';

defineEmits(['submit', 'reset']);
</script>
