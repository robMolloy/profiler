<template>
  <RmCardHeader>
    <template #headerLeft>
      <slot name="headerLeft" />
    </template>
    <template #headerRight>
      <slot name="headerRight" />
    </template>

    <RmForm
      @submit="(...props)=>$emit('submit',...props)"
      @reset="(...props)=>$emit('reset',...props)"
    >
      <slot />
    </RmForm>
  </RmCardHeader>
</template>

<script setup>
import { defineEmits } from 'vue';

import RmCardHeader from '../single/cards/RmCardHeader.vue';
import RmForm from './RmForm.vue';

defineEmits(['submit', 'reset']);

</script>
