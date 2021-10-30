<template>
  <q-toolbar v-bind="{...componentProps, ...attrs}">
    <slot name="left" />

    <q-toolbar-title>
      {{ title }}
    </q-toolbar-title>

    <slot name="right" />
  </q-toolbar>
</template>

<script setup>
import { useAttrs } from 'vue';
import { RmHeaderBar as componentProps } from '../../../../config/customise/componentProps';

const attrs = useAttrs();
const { title } = attrs;
</script>
