import { LitElement, html, css } from "lit";
import allTasks from "../assets/all.svg";
import completedTasks from "../assets/completed.svg";
import plannedTasks from "../assets/planned.svg";
import importantTasks from "../assets/important.svg";
import myDayTasks from "../assets/day.svg";
import addButton from "../assets/add.svg";

class SidebarElement extends LitElement {

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
            justify-content: center;
            padding: 1rem 1rem;
            gap: 20px;
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        li {
            display: flex;
            align-items: center;
            gap: 12px;
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

    render() {
        return html`
        <div class="sidebar-top">
            <input type="text" placeholder="Search Lists..." />
            <div class="projects">
                <ul class="list">
                    <li><img src=${myDayTasks} alt="My Day Tasks" /> My Day Tasks</li>
                    <li><img src=${allTasks} alt="All Tasks" /> All Tasks</li>
                    <li><img src=${completedTasks} alt="Completed Tasks" /> Completed Tasks</li>
                    <li><img src=${plannedTasks} alt="Planned Tasks" /> Planned Tasks</li>
                    <li><img src=${importantTasks} alt="Important Tasks" /> Important Tasks</li>
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