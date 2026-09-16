import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["days", "hours", "minutes", "seconds"]
  static values = { date: String }

  connect() {
    this.update()
    this.timer = window.setInterval(() => this.update(), 1000)
  }

  disconnect() {
    window.clearInterval(this.timer)
  }

  update() {
    const elapsed = Math.max(0, Date.now() - new Date(this.dateValue).getTime())
    const totalSeconds = Math.floor(elapsed / 1000)
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    this.daysTarget.textContent = days.toLocaleString("es-MX")
    this.hoursTarget.textContent = String(hours).padStart(2, "0")
    this.minutesTarget.textContent = String(minutes).padStart(2, "0")
    this.secondsTarget.textContent = String(seconds).padStart(2, "0")
  }
}