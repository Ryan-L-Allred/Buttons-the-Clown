import { getReservations, deleteReservation, getClowns, saveCompletion  } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")

            const completion = {
                reservationId: `${reservationId}`,
                clownId: `${clownId}`,
                date_created: 4567
            }
        
           saveCompletion(completion)
            
        }
    }
)

export const Reservations = () => {
    const reservations = getReservations()
    const clowns = getClowns()
    let html = `<ul>`

    const reservationsArray = reservations.map(reservation => {
        return `<li>
                    ${reservation.childName}'s birthday
                    <button class="reservation__deny"
                            id="reservation--${reservation.id}">
                        Deny
                    </button>
                    <select class="clowns" id="clowns">
                    <option value="">Performed By</option>
                    ${
                        clowns.map(
                            clown => {
                                return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
                            }
                        ).join("")
                    }
                </select>
                </li>`
    })

    html += reservationsArray.join("")
    html += `</ul>`
    return html
}