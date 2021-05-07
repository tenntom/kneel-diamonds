import { getOrders, getMetals, getStyles, getSizes, getItems } from "./dataAccess.js"

const buildOrderListItem = (order) => {
    const metals = getMetals()
    const styles = getStyles()
    const sizes = getSizes()
    const items = getItems ()
    
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const foundItem = items.find(
        (item) => {
            return item.id === order.itemId
        }
    )

    const totalCost = foundMetal.price + foundStyle.price + foundSize.price

    const additionalCost = foundItem.priceFactor*totalCost
    
    const costString = additionalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `
    <li>
        Order #${order.id} was placed on ${order.timestamp}. It includes a ${foundStyle.style} ${foundMetal.metal} ${foundItem.item} and totals ${costString}.
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
