<template>
  <RmCardBase v-bind="{...componentProps, ...attrs }">
    <RmHeaderBar
      v-if="showHeader"
      :title="title"
    >
      <template #left>
        <slot name="headerLeft" />
      </template>
      <template #right>
        <slot name="headerRight" />
      </template>
    </RmHeaderBar>

    <div>
      <slot />
    </div>
  </RmCardBase>
</template>

<script setup>
import { defineProps, useAttrs } from 'vue';
import { RmCard as componentProps } from '../../../../config/customise/componentProps';
import RmCardBase from './RmCardBase.vue';
import RmHeaderBar from '../bars/RmHeaderBar.vue';

defineProps({
  showHeader: { type: Boolean, default: true },
  title: { type: String, default: '' },
});
const attrs = useAttrs();
</script>
