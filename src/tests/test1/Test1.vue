<template>
  <RmCardForm
    title="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <Test1FormContent v-model="formData" />
    <!-- <Test1FormContent
      :model-value="formData"
      @update:modelValue="(x)=>onUpdate(x)"
    /> -->
  </RmCardForm>
  <div>parent: {{ formData }}</div>
</template>

<script setup>
import { reactive } from 'vue';
import RmCardForm from 'src/components/generic/multi/RmCardForm.vue';
import Test1FormContent from 'src/components/multi/form-contents/Test1FormContent.vue';
import { reass9 } from 'reass9';
import { f9Store } from '../../boot/fire9Boot';

// const getItem = async () => {
//   const id = 'c3GLBm6hmCijOaMaAB7q';
//   const collectionName = 'coll1';
//   // const item = await f9Store.readOne({ collectionName, payload: id });
//   // const item = await f9Store.readAll({ collectionName });
//   const item = await f9Store.readMany({ collectionName, payload: [id] });
//   console.log(/*LL*/ 29, 'item', item);
// };
// getItem();

// const createItem = async () => {
//   const collectionName = 'coll1';
//   // const item = await f9Store.createOne({ collectionName, payload: { lol: 'ha' } });
//   const payload = [{ a1: 'a1' }, { b1: 'b1' }];
//   const item = await f9Store.createMany({ collectionName, payload });
//   console.log(/*LL*/ 38, 'item', item);
// };
// createItem();

// const deleteItem = async () => {
//   const collectionName = 'coll1';
//   const payload = [
//     '1e2940d2-e046-417c-affc-789ef91af9e4',
//     '35fe9885-fcd4-49e9-8121-ee29c8a68b9b'
//   ];
//   // const item = await f9Store.deleteOne({ collectionName, payload });
//   const item = await f9Store.deleteMany({ collectionName, payload });
//   console.log(/*LL*/ 50, 'item', item);
// };
// deleteItem();

// const updateItem = async () => {
//   const collectionName = 'coll1';
//   const payload = ['39e7abbd-4c49-45ee-8770-1f296a2f7c82'
// , '502a94ad-4e2a-4fb0-b29c-f0de2aa89349'];
//   // const item = await
//   // f9Store.updateOne({ collectionName, payload: { id: payload[0], poo: 'po' } });
//   const item = await f9Store.updateMany({ collectionName,
// payload: [{ id: payload[0], poo: 'po0' }, { id: payload[1], poo: 'po1' }] });
//   console.log(/*LL*/ 62, 'item', item);
// };
// updateItem();

const doStuff = async () => {
  const rtn = await f9Store.readAll({ collectionName: 'coll1' });
  const doc = rtn[0];
  console.log(/*LL*/ 69, 'doc', doc);
  await f9Store.deleteOne({ collectionName: 'coll1', payload: doc.id });
};
doStuff();

const formData = reactive({ input1: 'hello', input2: '' });

const onSubmit = () => console.log(/*LL*/ 76, 'formData', formData);
const onReset = () => { reass9(formData, {}); };

</script>
