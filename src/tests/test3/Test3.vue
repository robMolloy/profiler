<template>
  <h2>Test 3</h2>
  <pre>{{ testObj }}</pre>

  Obj2
  <pre>{{ obj2 }}</pre>

  Obj3
  <pre>{{ obj3 }}</pre>

  obj4
  <pre>{{ obj4 }}</pre>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { extract9 } from 'extract9';

Object.assign(window, { axios });

const testObj = reactive({ hi: 1, bye: { cya: 2 } });

const obj2 = extract9(['hi', 'bye'], { hi: 1, bye: { cya: 2 }, afternoon: 123 });
const obj3 = extract9({ hi: 'hi', bye: 'bye' }, { hi: 1, bye: { cya: 2, lol: 4 }, afternoon: 123 });
const obj4 = extract9({ hi: 'hi', bye: { cya: 'cya' } }, { hi: 1, bye: { cya: 2, lol: 4 }, afternoon: 123 });

</script>
