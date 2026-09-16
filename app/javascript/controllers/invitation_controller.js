import { Controller } from "@hotwired/stimulus"
import confetti from "canvas-confetti"

export default class extends Controller {
  static targets = ["reservation"]

  accept() {
    this.reservationTarget.hidden = false
    this.reservationTarget.classList.add("is-confirmed")

    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.62 },
      colors: ["#b94b5f", "#e9b44c", "#f9e2d7", "#7d3047"]
    })
  }
}