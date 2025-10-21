const CLASSES = {
    inputField: "todo__input-field",
    addButton: "todo__add-button",
    list: "todo__list",
    template: "todo__template",
    item: "todo__item",
    itemTitle: "todo__item-title",
    removeButton: "todo__remove-button",
    filterButton: "todo__filter-button",
    filterAll: "button-all",
    filterActive: "button-started",
    filterCompleted: "button-completed",
    itemCompleted: "todo__item-completed",
    buttonActiveClass: "button-active",
};

const FILTERS = {
    all: document.querySelector(`.${CLASSES.filterAll}`),
    active: document.querySelector(`.${CLASSES.filterActive}`),
    completed: document.querySelector(`.${CLASSES.filterCompleted}`),
};

const input = document.querySelector(`.${CLASSES.inputField}`);
const addButton = document.querySelector(`.${CLASSES.addButton}`);
const list = document.querySelector(`.${CLASSES.list}`);
const template = document.querySelector(`.${CLASSES.template}`).content;
const filterButtons = document.querySelectorAll(`.${CLASSES.filterButton}`);
