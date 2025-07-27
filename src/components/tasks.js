import { LitElement, html, css } from "lit";

class TasksElement extends LitElement {

    static styles = css`

        h1 {
            background-color: #eee;
        }

    `

    render() {
        return html`
        <h1>This is the body element</h1>
        `
    }
}

customElements.define("tasks-ui", TasksElement);