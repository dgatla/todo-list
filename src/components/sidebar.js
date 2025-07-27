import { LitElement, html, css } from "lit";
import allTasks from "../assets/all.svg";
import completedTasks from "../assets/completed.svg";
import plannedTasks from "../assets/planned.svg";
import importantTasks from "../assets/important.svg";
import myDayTasks from "../assets/day.svg";
import addButton from "../assets/add.svg";

class SidebarElement extends LitElement {

    static properties = {
        selectedList: { type: String },
    }

    constructor() {
        super();
        this.selectedList = "my-day";
        this.taskLists = [
            { key: "my-day", label: "My Day Tasks", icon: myDayTasks },
            { key: "all", label: "All Tasks", icon: allTasks },
            { key: "completed", label: "Completed Tasks", icon: completedTasks },
            { key: "planned", label: "Planned Tasks", icon: plannedTasks },
            { key: "important", label: "Important Tasks", icon: importantTasks }
        ];

    }

    static styles = css`

        :host {
            box-sizing: border-box;
            border-right: 1px solid #ccc;
            background-color: #222222;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-between; 
        }
        .list {
            display: flex;
            flex-direction: column;
            padding: 1rem 0;
            justify-content: center;
            gap: 10px;
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        li {
            display: flex;
            align-items: center;
            padding: 0.5rem 1rem;
            gap: 12px;
        }
        li:hover, button:hover, .selected {
            background-color: #343434;
            cursor: pointer;
        }
        .selected {
            border-left: 4px solid #007bff;
        }
        img {
            width: 24px;
        }
        input {
            width: 90%;
            padding: 0.5rem 1%;
            margin: 1rem 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin: 1rem 4%;
            background-color: #222222;
            color: #ffffff;
        }
        .new {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 0.5rem 1rem;
            background-color: #222222;
            color: #ffffff;
            font-size: 1.1rem;
        }
        button {
            border: none;
        }
        .new img {
            width: 32px;
        }
    `;

    _handleListClick(event) {
        const list = event.target.closest("li");
        if (list != undefined) {
            this.selectedList = list.dataset.list;
            console.log("Selected List:", this.selectedList);
            this.dispatchEvent(new CustomEvent("list-selected", {
                detail: { selectedList: this.selectedList },
                bubbles: true,
                composed: true
            }));
        }
    }

    render() {
        return html`
        <div class="sidebar-top">
            <input type="text" placeholder="Search Lists..." />
            <div class="projects">
                <ul class="list">
                    ${this.taskLists.map(({ key, label, icon }) => html`
                        <li data-list=${key} @click=${this._handleListClick} class=${this.selectedList === key ? "selected" : ""}>
                            <img src=${icon} alt=${label} /> 
                            ${label}
                        </li>
                    `)}
                </ul>
                <hr />
            </div>
        </div>
        <div class="sidebar-bottom">
            <button class="new"><img src="${addButton}" alt="Add"/>New List</button>
        </div>
        `
    }
}

customElements.define("sidebar-ui", SidebarElement);