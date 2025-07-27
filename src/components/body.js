import { LitElement, html, css } from "lit";
import "./details.js"
import "./sidebar.js"
import "./tasks.js"

class BodyElement extends LitElement {

    static styles = css`
        :host {
            display: grid;
            grid-template-areas: 'sidebar tasks details';
            grid-template-columns: 20% 1fr 20%;
            height: 100vh;
        }

        sidebar-ui {
            grid-area: sidebar;
        }

        tasks-ui {
            grid-area: tasks;
        }
        details-ui {
            grid-area: details;
        }
    `

    render() {
        return html`
            <sidebar-ui></sidebar-ui>
            <tasks-ui></tasks-ui>
            <details-ui></details-ui>
        `
    }
}

customElements.define("body-ui", BodyElement);