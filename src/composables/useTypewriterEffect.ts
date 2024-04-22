import { ref, onMounted, onUnmounted } from 'vue'

interface Word {
  text: string
}

const useTypewriterEffect = (words: Word[]) => {
  const typedWords = ref(Array(words.length).fill(''))
  const currentWordIndex = ref(0)
  const showCaret = ref(true)
  let interval: any = null

  const speedWrite = ref(150)
  const timeWaitBeforeToEraseWord = ref(1000)
  const timeWaitBeforeWrite = ref(500)
  const timeWaitBeforeToStartEffect = ref(500)
  const scaretSpeed = ref(500)

  const typeWriterEffect = (word: Word, index: number) => {
    let charIndex = 0
    interval = setInterval(() => {
      typedWords.value[index] = word.text.substring(0, charIndex + 1)
      charIndex++
      if (charIndex === word.text.length) {
        clearInterval(interval)
        setTimeout(() => {
          eraseEffect(word, index)
        }, timeWaitBeforeToEraseWord.value) // Tiempo de espera antes de borrar la palabra
      }
    }, speedWrite.value) // Velocidad de escritura, puedes ajustarla según tu preferencia
  }

  const eraseEffect = (word: Word, index: number) => {
    let charIndex = word.text.length
    const interval = setInterval(() => {
      typedWords.value[index] = word.text.substring(0, charIndex)
      charIndex--
      if (charIndex === -1) {
        clearInterval(interval)
        // Pasar a la siguiente palabra después de borrar
        if (index < words.length - 1) {
          setTimeout(() => {
            typeWriterEffect(words[index + 1], index + 1)
            currentWordIndex.value = index + 1
          }, timeWaitBeforeWrite.value) // Tiempo de espera antes de empezar a escribir la siguiente palabra
        } else {
          setTimeout(() => {
            restartEffect()
          }, timeWaitBeforeToStartEffect.value) // Tiempo de espera antes de reiniciar el efecto
        }
      }
    }, 50) // Velocidad de borrado, puedes ajustarla según tu preferencia
  }

  const restartEffect = () => {
    typedWords.value = Array(words.length).fill('')
    typeWriterEffect(words[0], 0)
    currentWordIndex.value = 0
  }

  onMounted(() => {
    typeWriterEffect(words[0], 0)
    setInterval(() => {
      showCaret.value = !showCaret.value
    }, scaretSpeed.value) // Cambiar la visibilidad del caret cada 500ms para simular el parpadeo
  })

  onUnmounted(() => {
    // Limpia cualquier intervalo cuando el componente se desmonte
    clearInterval(interval)
  })

  return {
    typedWords,
    currentWordIndex,
    showCaret
  }
}
export default useTypewriterEffect
