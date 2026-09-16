import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["button"]

  move(event) {
    event.preventDefault()
    const button = this.buttonTarget
    const container = button.closest(".answer-buttons")
    const padding = 18
    const maxX = Math.max(padding, container.clientWidth - button.offsetWidth - padding)
    const maxY = Math.max(padding, container.clientHeight - button.offsetHeight - padding)
    const rangeX = Math.max(0, maxX - padding)
    const rangeY = Math.max(0, maxY - padding)

    button.classList.add("is-running-away")
    button.style.left = `${Math.floor(padding + Math.random() * rangeX)}px`
    button.style.top = `${Math.floor(padding + Math.random() * rangeY)}px`
  }
}