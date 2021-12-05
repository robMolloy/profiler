<template>
  <RmCardHeader>
    <template #headerLeft>
      <slot name="headerLeft" />
    </template>

    <template #headerRight>
      <slot name="headerRight" />
    </template>

    <RmForm
      v-bind="attrs"
      @submit="(...props)=>$emit('submit',...props)"
      @reset="(...props)=>$emit('reset',...props)"
    >
      <slot />
    </RmForm>
  </RmCardHeader>
</template>

<script setup>
import { defineEmits, useAttrs } from 'vue';

import RmCardHeader from '../single/cards/RmCard.vue';
import RmForm from './RmForm.vue';

defineEmits(['submit', 'reset']);

const attrs = useAttrs();

</script>
