<template>
  <q-list v-bind="{ ...componentProps, ...attrs }">
    <RmInterfaceSideBarLink
      v-for="link in componentContent"
      :key="link.title"
      v-bind="link"
    />
  </q-list>
</template>

<script setup>
import { useAttrs } from 'vue';

import { RmInterfaceSideBarLinks as componentContent } from 'src/config/customise/componentContent';
import { RmInterfaceSideBarLinks as componentProps } from 'src/config/customise/componentProps';

import RmInterfaceSideBarLink from './RmInterfaceSideBarLink.vue';

const attrs = useAttrs();

</script>
