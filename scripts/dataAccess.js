
import { database } from "./database.js"

export const getOrderBuilder = {...database.orderBuilder}

export const getMetals = () => {
    return [...database.metals]
}

export const getSizes = () => {
    return [...database.sizes]
}

export const getStyles = () => {
    return [...database.styles]
}

export const getItems = () => {
    return [...database.items]
}

export const getOrders = () => {
    return [...database.customOrders]
}

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

export const setItem = (id) => {
    database.orderBuilder.itemId = id
}

// console.log (database.orderBuilder) // Just checking.

export const addCustomOrder = () => {
    if (
        "metalId" in database.orderBuilder &&
        "styleId" in database.orderBuilder &&
        "sizeId" in database.orderBuilder &&
        "itemId" in database.orderBuilder
    ) {
        // Copy the current state of user choices
        const newOrder = { ...database.orderBuilder }

        newOrder.id = [...database.customOrders].pop().id + 1

        // Add a timestamp to the order
        newOrder.timestamp = Date.now()

        // Add the new order object to custom orders state
        database.customOrders.push(newOrder)

        // Reset the temporary state for user choices
        database.orderBuilder = {}

        // Broadcast a notification that permanent state has changed
        document.dispatchEvent(new CustomEvent("stateChanged"))
    } else {
        window.alert("Please complete all required fields.")
    }
}