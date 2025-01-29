<template>
    <div class="inventoryCont"> 
        <div class="componentsCont">
            <ghost-cart @update-theme="toggleTheme"/>
            <Table/>
        </div>
        <ghost-row-vue/>
    </div>
</template>

<script>
import GhostCart from './GhostCart.vue'
import GhostRowVue from './GhostRow.vue'
import Table from "./Table.vue"
import { useTheme } from '../Theme'

export default {
    setup() {

       const { theme, toggleTheme } = useTheme() // Используем хук useTheme

        return {
        theme,
        toggleTheme
        }

    },
    components: {
        GhostCart,
        GhostRowVue,
        Table
    }
}
</script>


<style scoped>
    .inventoryCont{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        padding: 32px;
        height: 660px;
        width: 849px;
        border: 1px solid black;
    }

    .componentsCont{
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: space-between;
    }
</style>