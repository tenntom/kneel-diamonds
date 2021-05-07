import { getItems, setItem } from "./dataAccess.js"

const items = getItems()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "item") {
            const[,itemId] = event.target.value.split("--")

            setItem(parseInt(itemId))

        }
    }
)




export const JewelryItems = () => {
    let html = "<ul class='item-options'>"

    const itemOptions = items.map((jewelryItem) => 
    {
        return `
        <li class = "list-item">
        <input type="radio" name="item" value ="item--${jewelryItem.id}">${jewelryItem.item}
        </li>
        `
    })

    html += itemOptions.join("")
    html += "</ul>"
    return html
}