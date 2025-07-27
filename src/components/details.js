import { LitElement, html, css } from "lit";

class DetailsElement extends LitElement {

    static styles = css`

        h1 {
            background-color: #eee;
        }

    `

    render() {
        return html`
        <h1>This is the Details tab</h1>
        `
    }
}

customElements.define("details-ui", DetailsElement);