import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["welcome", "content"]

  connect() {
    document.body.classList.add("welcome-locked")
  }

  open() {
    this.welcomeTarget.classList.add("is-closing")
    this.contentTarget.classList.add("is-visible")
    document.body.classList.remove("welcome-locked")
    window.dispatchEvent(new CustomEvent("romance:unlocked"))

    window.setTimeout(() => {
      this.welcomeTarget.hidden = true
    }, 800)
  }

  disconnect() {
    document.body.classList.remove("welcome-locked")
  }
}