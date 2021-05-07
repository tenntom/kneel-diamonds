import { getMetals, setMetal, getOrderBuilder } from "./dataAccess.js"

const metals = getMetals()

const currentMetal = getOrderBuilder.metalId


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)



export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += "<li>"
        if (metal.id === currentMetal) {
            html += `<input type="radio" name="metal" value="${metal.id} checked="checked"/> ${metal.metal}
        </li>`
        } else {
            html += `<input type="radio" name="metal" value="${metal.id}"/> ${metal.metal}
    </li>`
        }
    }
    html += "</ul>"
    return html
}

