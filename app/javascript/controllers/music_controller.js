import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["audio", "toggle", "icon"]

  connect() {
    this.playMusic = this.playMusic.bind(this)
    window.addEventListener("romance:unlocked", this.playMusic)
  }

  disconnect() {
    window.removeEventListener("romance:unlocked", this.playMusic)
  }

  async playMusic() {
    try {
      await this.audioTarget.play()
      this.updateButton(true)
    } catch (_error) {
      this.updateButton(false)
    }
  }

  toggle() {
    if (this.audioTarget.paused) {
      this.playMusic()
    } else {
      this.audioTarget.pause()
      this.updateButton(false)
    }
  }

  updateButton(isPlaying) {
    this.iconTarget.innerHTML = isPlaying ? "&#10074;&#10074;" : "&#9835;"
    this.toggleTarget.classList.toggle("is-playing", isPlaying)
    this.toggleTarget.setAttribute("aria-label", isPlaying ? "Pausar música" : "Reproducir música")
  }
}