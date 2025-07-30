export default class Project {
    /**
     * Represents a project with a name, description, and an array of tasks.
     * @param {string} name - The name of the project.
     * @param {string} description - A brief description of the project.
     */
    constructor(name) {
        /** @type {string} */
        this._name = name;

        /** @type {Array<Task>} */
        this._tasks = [];

        /**
         * @type {String}
         */
        this._id = String(crypto.getRandomValues())
    }

    /**
     * Gets the project name.
     * @returns {string} The name of the project.
     */
    get name() {
        return this._name;
    }

    /**
     * Sets the project name.
     * @param {string} value - The new project name.
     * @throws {TypeError} If the value is not a string.
     */
    set name(value) {
        if (typeof value !== "string") {
            throw new TypeError("Project name must be a string.");
        }
        this._name = value;
    }

    /**
     * Gets the list of tasks associated with the project.
     * @returns {Array<Task>} The tasks in the project.
     */
    get tasks() {
        return this._tasks;
    }

    /**
     * Replaces all tasks for the project.
     * @param {Array<Task>} tasks - The new array of tasks.
     * @throws {TypeError} If tasks is not an array or contains invalid items.
     */
    set tasks(tasks) {
        if (!Array.isArray(tasks) || !tasks.every(task => typeof task === "object" && task !== null)) {
            throw new TypeError("Tasks must be an array of valid Task objects.");
        }
        this._tasks = tasks;
    }

    /**
     * Adds a task to the project.
     * @param {Task} task - The task to add.
     * @throws {TypeError} If task is not a valid object.
     */
    addTask(task) {
        if (typeof task !== "object" || task === null) {
            throw new TypeError("Task must be a valid object.");
        }
        this._tasks.push(task);
    }

    /**
     * Removes a task from the project.
     * @param {string} id - The ID of the task to remove.
     * @throws {TypeError} If id is not a String.
     */
    removeTask(id) {
        if (typeof id !== String) throw TypeError("The id should be of type String")
        this._tasks = this._tasks.filter(task => task.id !== id);
    }

    
    /**
     * @returns {String}
     */
    get id() {
        return this._id;
    }
}