<template>
  <RmCardBase v-bind="{...componentProps, ...attrs}">
    <RmHeaderBar :title="title">
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
import { useAttrs } from 'vue';
import { RmCardHeader as componentProps } from '../../../../config/customise/componentProps';
import RmCardBase from './RmCardBase.vue';
import RmHeaderBar from '../bars/RmHeaderBar.vue';

const { title, ...attrs } = useAttrs();
</script>
