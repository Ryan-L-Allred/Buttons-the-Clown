import { EventForm } from "./EventForm.js"
import { Reservations } from "./Reservations.js"

export const ButtonsTheClown = () => {
    return `
    <h1>Buttons and Lollipop</h1>
    <section class="eventForm">
        ${EventForm()}
    </section>

    <section class="reservations">
        <h2>Reservations</h2>
        ${Reservations()}
    </section>
    `
}