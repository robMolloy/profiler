<template>
  <RmCardForm
    title="form"
    :submit-disabled="true"
    @submit="onSubmit"
  >
    <RmInputBase
      v-model="id1"
      label="id1"
    />
    <RmInputBase
      v-model="id2"
      label="id2"
    />

    <RmButtonBase
      label="delete"
      @click="deleteById"
    />
    <RmButtonBase
      label="sync1"
      @click="sync1"
    />

    <pre>local:  {{ local }}</pre>
    <pre>indexed : {{ indexed }}</pre>
  </RmCardForm>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import RmButtonBase from 'src/components/generic/single/buttons/RmButtonBase.vue';
import { useStore } from 'vuex';
import { useNamespacedStore } from 'vuex9';
import { ref, computed } from 'vue';
// import { f9Store } from 'src/boot/fire9Boot';
import RmInputBase from 'src/components/generic/single/input/RmInputBase.vue';
import RmCardForm from 'src/components/generic/multi/RmCardForm.vue';

const id1 = ref('');
const id2 = ref('');
const ids = computed(() => [id1.value, id2.value]);

const store = useStore();
const coll2Store = useNamespacedStore('coll2');

const { indexed, local } = coll2Store.getters(['indexed', 'local']);
const { deleteLocal } = coll2Store.commit(['deleteLocal']);
const { sync } = coll2Store.dispatch(['sync']);

const deleteById = () => {
  console.log(/*LL*/ 54, 'id1.value', id1.value);
  deleteLocal(id1.value);
};

const onSubmit = () => {
  setTimeout(() => console.log(/*LL*/ 58, '123', 123), 3000);
};
const sync1 = () => {
  sync();
};
</script>
