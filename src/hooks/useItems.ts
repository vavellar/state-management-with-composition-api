import { ref } from 'vue'

export function useItems() {
    const items = ref([
        {
            id: 0,
            name: 'Eggs',
            count: 10
        },
        {
            id: 1,
            name: 'Fresh Milk',
            count: 1
        }
    ])

    function deleteItem(id: number) {
        items.value = items.value.filter((item) => item.id !== id)
    }
    
    return {
        items, 
        deleteItem
    }
}