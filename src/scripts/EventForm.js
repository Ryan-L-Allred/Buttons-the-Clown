import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userNumberOfChildren = document.querySelector("input[name='numberOfChildren']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='dateOfReservation']").value
        const userDuration = document.querySelector("input[name='durationOfReservation']").value

        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numberOfChildren: userNumberOfChildren,
            address: userAddress,
            date: userDate,
            durationInHours: userDuration
        }
        sendReservation(dataToSendToAPI)
    }
})

export const EventForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="parentName">Name of Parent</label>
        <input type="text" name="parentName" class="input: />
    </div>
    <div class="field">
        <label class="label" for="childName">Name of Child</label>
        <input type="text" name="childName" class="input: />
    </div>
    <div class="field">
        <label class="label" for="numberOfChildren">Number of Children Attending</label>
        <input type="text" name="numberOfChildren" class="input: />
    </div>
    <div class="field">
        <label class="label" for="address">Address</label>
        <input type="text" name="address" class="input: />
    </div>
    <div class="field">
        <label class="label" for="dateOfReservation">Reservation Date</label>
        <input type="text" name="dateOfReservation" class="input: />
    </div>
    <div class="field">
        <label class="label" for="durationOfReservation">Duration in Hours</label>
        <input type="text" name="durationOfReservation" class="input: />
    </div>

    <button class="button" id="submitReservation"> Submit Reservation</button>
`
    return html
}