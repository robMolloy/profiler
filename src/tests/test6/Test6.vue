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

    <pre>indexed: {{ indexed }}</pre>
  </RmCardForm>
</template>

<script setup>
import RmButtonBase from 'src/components/generic/single/buttons/RmButtonBase.vue';
import { useNamespacedStore } from 'vuex9';
import { ref, computed } from 'vue';
// import { f9Store } from 'src/boot/fire9Boot';
import RmInputBase from 'src/components/generic/single/input/RmInputBase.vue';
import RmCardForm from 'src/components/generic/multi/RmCardForm.vue';

const id1 = ref('');
const id2 = ref('');
const ids = computed(() => [id1.value, id2.value]);

const coll1Store = useNamespacedStore('coll1');

const { indexed } = coll1Store.getters('indexed');

const deleteById = () => {
  console.log(/*LL*/ 38, 'ids.value', ids.value);
};

const onSubmit = () => {
  setTimeout(() => console.log(/*LL*/ 43, '123', 123), 3000);
};
// const { setData: setDataCommit } = coll1Store.commit(['setData']);

</script>
