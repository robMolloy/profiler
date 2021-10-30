<template>
  <RmDialogBase v-bind="{...componentProps, ...attrs}">
    <RmCardBase :title="title">
      <slot />
    </RmCardBase>
  </RmDialogBase>
</template>
<script setup>
import { useAttrs } from 'vue';
import { RmDialogCard as componentProps } from '../../../../config/customise/componentProps';

import RmDialogBase from './RmDialogBase.vue';
import RmCardBase from '../cards/RmCardBase.vue';

const { title, ...attrs } = useAttrs();
</script>
