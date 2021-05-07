/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    items:[
        {id: 1, item: "Ring", priceFactor: 1},
        {id: 2, item: "Earring", priceFactor: 2},
        {id: 3, item: "Necklace", priceFactor: 4}
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            itemId: 2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}

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