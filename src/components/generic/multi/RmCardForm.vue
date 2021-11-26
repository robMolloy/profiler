<template>
  <RmCardBase>
    <RmHeaderBar
      v-if="props.showHeader"
      :title="props.title"
    >
      <template #left>
        <slot name="headerLeft" />
      </template>
      <template #right>
        <slot name="headerRight" />
      </template>
    </RmHeaderBar>

    <RmForm
      @submit="(...submitProps)=>$emit('submit',...submitProps)"
      @reset="(...resetProps)=>$emit('reset',...resetProps)"
    >
      <slot />
    </RmForm>
  </RmCardBase>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

// import RmCardHeader from '../single/cards/RmCardHeader.vue';
import RmForm from './RmForm.vue';
import RmCardBase from '../single/cards/RmCardBase.vue';
import RmHeaderBar from '../single/bars/RmHeaderBar.vue';

defineEmits(['submit', 'reset']);
const props = defineProps({
  showHeader: { default: () => true, type: Boolean },
  title: { default: '', type: String },
});

</script>
