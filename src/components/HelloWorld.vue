<template>
  <h2>{{msg}}</h2>
  <div v-for="item in state.items">
    <li>
      {{item.count }} - {{ item.name}}
    </li>
    <button @click="deleteItem(item.id)">Delete</button>
  </div>

</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useItemsAsync } from '../hooks/useItemsAsync';

defineProps<{ msg: string }>()
const { state, deleteItem, loadItems } = useItemsAsync()

onMounted( async () => {
  loadItems()
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
