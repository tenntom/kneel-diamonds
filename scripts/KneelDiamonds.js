import { Metals } from "./Metals.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./dataAccess.js"
import { JewelryItems } from "./items.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1 class="title">Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                <p>${Metals()}</p>
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                <p>${DiamondSizes()}</p>
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                <p> ${JewelryStyles()}</p>
            </section>
        </article>
        <section class="items"> 
            ${JewelryItems()}
        </section>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            <p> ${Orders()}</p>

        </article>
    `
}

