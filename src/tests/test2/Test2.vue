<template>
  <h2>Test 2</h2>
</template>

<script setup>
import { group } from 'index9';
import { countries, contacts, customers } from 'index9/exampleData';
// import * as exampleData from 'index9/exampleData';

console.log(/*LL*/ 11, 'countries, contacts, customers', countries, contacts, customers);

// const countries = {
//   id1: { id: 'id1', name: 'america', pop: 300000000, continent: 'NA' },
//   id2: { id: 'id2', name: 'colombia', pop: 100000000, continent: 'SA' },
//   id3: { id: 'id3', name: 'UK', pop: 70000000, continent: 'EUR' },
//   id4: { id: 'id4', name: 'France', pop: 80000000, continent: 'EUR' },
// };
const indexed = group(countries)
  .on('continent');

console.log(/*LL*/ 17, 'indexed', indexed);

// // import { mapGetters } from 'vuex';
// import { db } from 'src/boot/firebase';
// import {
//   doc,
//   getDoc,
// } from 'firebase/firestore';

// const docRef = doc(db, 'users', '1bHvmHPULCUUny1ZAouvQ9IJRaX2');
// const docSnap = await getDoc(docRef);
// console.log(/*LL*/ 28, 'docSnap', docSnap);

// if (docSnap.exists()) {console.log('Document data:', docSnap.data())};
// else console.log('No such document!');

</script>
