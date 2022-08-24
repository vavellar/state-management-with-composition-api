import { computed, ref, readonly } from 'vue'
import { dummyItems } from '../dummyItems'

interface Items {
    id: number
    count: number
    name: string
}

interface State {
    items: Items[]
    isLoading: boolean
}

const state = ref<State>({
    items: [],
    isLoading: false
})

export function useItemsAsync() {
    const sleep = async () => await new Promise(resolve => setTimeout(resolve, 2000))

    function setItems(items: Items[]) {
        state.value.items = items
    }

    async function loadItems() {
        try {
            state.value.isLoading = true
            // const items = await fetchItems()
            await sleep()
            setItems(dummyItems)
        } catch(e) {
            console.log(e)
        } finally {
            state.value.isLoading = false
        }
    }

    function deleteItem(id: number) {
        state.value.items = state.value.items.filter((item) => item.id !== id)
    }

    const firstItem = computed(() => state.value.items && state.value.items[0])
    
    return {
        firstItem,
        loadItems,
        state: readonly(state),
        deleteItem
    }
}