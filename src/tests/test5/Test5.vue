<template>
  <RmCardHeader title="form">
    <!-- <RmButtonBase @click="onLog">
      log vuex
    </RmButtonBase>
      -->
    <RmButtonBase @click="setDataCommit([{id:'id4', greet:'pippin'}])">
      set vuex
    </RmButtonBase>
    <RmButtonBase @click="onSet2">
      set2 vuex
    </RmButtonBase>

    <pre>data: {{ data }}</pre>
    <pre>indexed: {{ indexed }}</pre>
  </RmCardHeader>
</template>

<script setup>
import RmCardHeader from 'src/components/generic/single/cards/RmCard.vue';
import RmButtonBase from 'src/components/generic/single/buttons/RmButtonBase.vue';
import { useNamespacedStore } from 'vuex9';

const coll1Store = useNamespacedStore('coll1');

const { indexed } = coll1Store.getters('indexed');
const { data } = coll1Store.getters(['data']);

const { setData: setDataCommit } = coll1Store.commit(['setData']);
const { setData: setDataAction } = coll1Store.dispatch(['setData']);

// const onSet = () => setDataCommit([]);
const onSet2 = () => setDataAction([{ id: 'id3', greet: 'merry' }]);

</script>
