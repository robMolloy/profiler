<template>
  <RmDialogBase v-bind="{...componentProps, ...attrs}">
    <RmCardHeader :title="title">
      <template #headerRight>
        <RmIconClose v-close-popup />
      </template>
      <slot />
    </RmCardHeader>
  </RmDialogBase>
</template>

<script setup>
import { useAttrs } from 'vue';
import { RmDialogCardHeader as componentProps } from '../../../../config/customise/componentProps';

import RmCardHeader from '../cards/RmCardHeader.vue';
import RmIconClose from '../icons/RmIconClose.vue';
import RmDialogBase from './RmDialogBase.vue';

const { title, ...attrs } = useAttrs();
</script>
