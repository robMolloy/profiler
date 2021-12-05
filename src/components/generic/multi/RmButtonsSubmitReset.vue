<template>
  <RmButtonReset :disabled="resetDisabled" />
  <RmButtonSubmit :disabled="submitDisabled" />
</template>

<script setup>
import { defineProps } from 'vue';

import RmButtonSubmit from '../single/buttons/RmButtonSubmit.vue';
import RmButtonReset from '../single/buttons/RmButtonReset.vue';

defineProps({
  submitDisabled: { type: Boolean, default: false },
  resetDisabled: { type: Boolean, default: false },
});
</script>
