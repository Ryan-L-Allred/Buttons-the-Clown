
const mainContainer = document.querySelector("#container")

const applicationState = {
    clowns: [],
    reservations: [],
    completions: []
}


const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (serviceReservations) => {
                // Store the external state in application state
                applicationState.reservations = serviceReservations
            }
        )
}

export const sendReservation = (userReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservation)
    }

    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.clowns = data
        }
    )
}

export const saveCompletion = (completedJobs) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completedJobs)
    }

    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (serviceCompletions) => {
                //Store the external state in application state
                applicationState.completions = serviceCompletions
            }
        )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({ ...reservation }))
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({ ...clown }))
}