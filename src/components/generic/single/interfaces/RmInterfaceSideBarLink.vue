<template>
  <q-item
    clickable
    v-bind="{ ...componentProps, ...attrs }"
    :to="link"
    exact
    active-class="bg-grey-3 text-primary"
  >
    <!-- @click="router.push(link)" -->
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label class="text-caption">
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useAttrs } from 'vue';

import { RmInterfaceSideBarLinks as componentProps } from 'src/config/customise/componentProps';

const { title, caption, link, icon, ...attrs } = useAttrs();

</script>
