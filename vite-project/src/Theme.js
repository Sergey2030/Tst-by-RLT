import { ref, onMounted, watch } from "vue"

export function useTheme() {
  const theme = ref(localStorage.getItem("theme") || "dark")

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light"
  }

  watch(theme, (newTheme) => {
    const root = document.documentElement

    if (newTheme === "light") {
      root.style.setProperty("--background-color", "rgba(230, 230, 230, 1)")
      root.style.setProperty("--text-color", "#000000")
      root.style.setProperty("--button-color", "#4CAF50")
      root.style.setProperty("--bg-input", "linear-gradient(135deg, rgba(200, 200, 200, 1), rgba(220, 220, 220, 1), rgba(240, 240, 240, 1))")
      root.style.setProperty("--color-btn-sh", "rgba(0, 0, 0, 1")
    } else {
      root.style.setProperty("--background-color", "rgba(38, 38, 38, 1)")
      root.style.setProperty("--text-color", "#ffffff")
      root.style.setProperty("--button-color", "#8BC34A")
      root.style.setProperty("--bg-input", "linear-gradient(135deg, rgba(60, 60, 60, 1), rgba(68, 68, 68, 1), rgba(51, 51, 51, 1))")
      root.style.setProperty("--color-btn-sh", "rgba(255, 255, 255, 1")
    }

    localStorage.setItem("theme", newTheme)
  })

  onMounted(() => {
    const currentTheme = localStorage.getItem("theme") || "light"
    theme.value = currentTheme
    const root = document.documentElement

    if (currentTheme === "light") {
      root.style.setProperty("--background-color", "rgba(230, 230, 230, 1)")
      root.style.setProperty("--text-color", "#000000")
      root.style.setProperty("--button-color", "#4CAF50")
      root.style.setProperty("--bg-input", "linear-gradient(135deg, rgba(200, 200, 200, 1), rgba(220, 220, 220, 1), rgba(240, 240, 240, 1))")
      root.style.setProperty("--color-btn-sh", "rgba(0, 0, 0, 1")
    } else {
      root.style.setProperty("--background-color", "rgba(38, 38, 38, 1)")
      root.style.setProperty("--text-color", "#ffffff")
      root.style.setProperty("--button-color", "#8BC34A")
      root.style.setProperty("--bg-input", "linear-gradient(135deg, rgba(60, 60, 60, 1), rgba(68, 68, 68, 1), rgba(51, 51, 51, 1))")
      root.style.setProperty("--color-btn-sh", "rgba(255, 255, 255, 1")
    }
  })

  return { theme, toggleTheme }
}
