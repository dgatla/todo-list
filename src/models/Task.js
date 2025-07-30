/**
 * Represents a task with a title, description, due date, priority, and status.
 */
export default class Task {

    /**
     * @param {string} title 
     * @param {string} description 
     * @param {Date} dueDate 
     * @param {boolean} priority 
     * @param {string} status 
     */
    constructor(title, description, dueDate, priority, status = "pending") {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._status = status;
    }

    /**
     * Returns the title of the task.
     * @returns {string}
     */
    getTitle() {
        return this._title;
    }
    /**
     * Returns the description of the task.
     * @returns {string}
     */
    getDescription() {
        return this._description;
    }
    /**
     * Returns the due date of the task.
     * @returns {Date}
     */
    getDueDate() {
        return this._dueDate;
    }
    /**
     * Returns the priority of the task.
     * @returns {boolean}
     */
    getPriority() {
        return this._priority;
    }
    /**
     * Returns the status of the task.
     * @returns {string}
     */
    getStatus() {
        return this._status;
    }

    /**
     * Sets the title of the task.
     * @param {string} title
     * @throws {Error} If the title is not a string.
     */
    setTitle(title) {
        if (typeof title !== 'string') {
            throw new Error('Title must be a string');
        }
        this._title = title;
    }

    /**
     * Sets the description of the task.
     * @param {string} description
     * @throws {Error} If the description is not a string.
     */
    setDescription(description) {
        if (typeof description !== 'string') {
            throw new Error('Description must be a string');
        }
        this._description = description;
    }

    /**
     * Sets the due date of the task.
     * @param {Date} dueDate
     * @throws {Error} If the due date is not a Date object.
     */
    setDueDate(dueDate) {
        if (!(dueDate instanceof Date)) {
            throw new Error('Due date must be a Date object');
        }
        this._dueDate = dueDate;
    }

    /**
     * Sets the priority of the task.
     * @param {boolean} priority
     * @throws {Error} If the priority is not a boolean.
     */
    setPriority(priority) {
        if (typeof priority !== 'boolean') {
            throw new Error('Priority must be a boolean');
        }
        this._priority = priority;
    }

    /**
     * Sets the status of the task.
     * @param {string} status
     * @throws {Error} If the status is not a string or is not 'pending', 'in progress', or 'completed'.
     */
    setStatus(status) {
        if (typeof status !== 'string') {
            throw new Error('Status must be a string');
        }
        if (status !== 'pending' && status !== 'in progress' && status !== 'completed') {
            throw new Error('Status must be pending, in progress, or completed');
        }
        this._status = status;
    }
}