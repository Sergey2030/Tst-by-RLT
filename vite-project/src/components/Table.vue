<template>
  <div class="tableCont" ref="inventoryGrid">
    <div @mousedown="startDrag(cell.item, $event)" v-for="(cell, index) in grid" :key="index" class="cell">
      <div
        v-if="cell.item"
        class="item"
        :style="{ backgroundColor: cell.item.color }"
      ></div>
      <div v-if="cell.item" class="item-count">{{ cell.item.count }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";


const gridSize = 5
const grid = ref([])
const cellSize = 110
const inventoryGrid = ref(null)


const defaultItems = [
  { id: 1, x: 0, y: 0, color: "green", count: 4 },
  { id: 2, x: 1, y: 0, color: "tan", count: 2 },
  { id: 3, x: 2, y: 0, color: "blue", count: 5 },
]


const initializeGrid = () => {
  grid.value = Array(gridSize * gridSize).fill(null).map((_, i) => ({
    x: i % gridSize,
    y: Math.floor(i / gridSize),
    item: null,
  }))
  
  const savedItems = JSON.parse(localStorage.getItem("grid"))
  
  if (savedItems) {
    savedItems.forEach((item) => {
      const index = item.y * gridSize + item.x
      grid.value[index].item = item
    })
  } else {
    defaultItems.forEach((item) => {
      const index = item.y * gridSize + item.x
      grid.value[index].item = item
    })
  }
}


const startDrag = (item, event) => {
  const onMouseMove = (e) => {
    const rect = inventoryGrid.value.getBoundingClientRect()
    const x = Math.max(0, Math.min(gridSize - 1, Math.floor((e.clientX - rect.left) / cellSize)))
    const y = Math.max(0, Math.min(gridSize - 1, Math.floor((e.clientY - rect.top) / cellSize)))
    const newIndex = y * gridSize + x
    const oldIndex = item.y * gridSize + item.x

    if (newIndex !== oldIndex) {
      grid.value[oldIndex].item = null
      grid.value[newIndex].item = item
      item.x = x
      item.y = y
      saveGridToLocalStorage()
    }
  }

  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove)
    window.removeEventListener("mouseup", onMouseUp)
  }

  window.addEventListener("mousemove", onMouseMove)
  window.addEventListener("mouseup", onMouseUp)
}

const saveGridToLocalStorage = () => {
  const items = grid.value.map(cell => cell.item).filter(item => item)
  localStorage.setItem("grid", JSON.stringify(items))
}

const updateItemCount = (item) => {
  saveGridToLocalStorage()
}

onMounted(() => {
  initializeGrid()
})
</script>

<style scoped>
.tableCont {
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(5, 100px);
  gap: 2px;
  width: 550px;
  height: 570px;
}

.cell {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  cursor: grab;
  user-select: none;
}

.item-count {
  position: absolute;
  bottom: 3px;
  right: 3px;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 4px;
}

.item-input {
  position: absolute;
  bottom: 3px;
  left: 3px;
  width: 30px;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  font-size: 14px;
  text-align: center;
  border-radius: 4px;
  border: none;
  padding: 2px;
}
</style>
