window.addEventListener('keydown', (e) => {
  playChords(e.key)
})

function playChords (key) {
  const chords = document.querySelector(`audio[data-key="${key}"]`)

  if (!chords) return

  chords.currentTime = 0

  chords.play()
}
