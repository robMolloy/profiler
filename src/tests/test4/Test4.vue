<template>
  <RmCardHeader title="form" />
</template>

<script setup>
import RmCardHeader from 'src/components/generic/single/cards/RmCard.vue';
import { f9Store } from '../../boot/fire9Boot';

const collectionName = 'coll1';

const listen = async () => {
  const onChange = (docs) => console.log(/*LL*/ 12, 'docs', docs);

  const unsubscribe = await f9Store.listenToCollection({ collectionName, onChange });
  return unsubscribe;
};

const doStuff = async () => {
  await listen();
  let docs = await f9Store.readAll({ collectionName });
  const ids = docs.map(({ id }) => id);

  // const doc = await f9Store.readOne({ collectionName, payload: docs[0].id });
  docs = await f9Store.readMany({ collectionName, payload: ids });

  await f9Store.deleteOne({ collectionName, payload: 'hi' });
  await f9Store.deleteMany({ collectionName, payload: ids });

  await f9Store.createOne({ collectionName, payload: { blah: 'achoo' } });
  await f9Store.createMany({
    collectionName,
    payload: [{ bloo: 'yoo' }, { silly: 'sausage' }],
  });

  docs = await f9Store.readAll({ collectionName });
  const updatableDocs = docs.map((x) => ({ ...x, ...{ nowUpdated: true } }));
  f9Store.updateOne({ collectionName, payload: { ...updatableDocs[0], j: Math.random() } });
  f9Store.updateMany({ collectionName, payload: updatableDocs });
};
doStuff();

</script>
