const refreshUI = () => {
    const all = list.children.length;
    const completed = list.querySelectorAll(`.${CLASSES.itemCompleted}`).length;
    const active = all - completed;

    FILTERS.all.textContent = `Все (${all})`;
    FILTERS.active.textContent = `Активные (${active})`;
    FILTERS.completed.textContent = `Завершенные (${completed})`;

    applyCurrentFilter();
};

const getFilterType = (button) => {
    if (button.classList.contains(CLASSES.filterAll)) {
        return "all";
    }
    if (button.classList.contains(CLASSES.filterActive)) {
        return "active";
    }
    return "completed";
};

const applyCurrentFilter = () => {
    const activeButton = document.querySelector(
        `.${CLASSES.filterButton}.${CLASSES.buttonActiveClass}`
    );
    if (!activeButton) return;
    const type = getFilterType(activeButton);

    Array.from(list.children).forEach((item) => {
        const isCompleted = item.classList.contains(CLASSES.itemCompleted);
        item.style.display =
            type === "all" ||
            (type === "active" && !isCompleted) ||
            (type === "completed" && isCompleted)
                ? ""
                : "none";
    });
};

const createItem = (title, completed = false) => {
    // вместо createElement я решил использовать template и подставлять в него данные
    const clone = template.querySelector(`.${CLASSES.item}`).cloneNode(true);
    clone.querySelector(`.${CLASSES.itemTitle}`).textContent = title;
    if (completed) {
        clone.classList.add(CLASSES.itemCompleted);
    }

    clone.addEventListener("click", (event) => {
        if (event.target.closest(`.${CLASSES.removeButton}`)) {
            return;
        }
        clone.classList.toggle(CLASSES.itemCompleted);
        refreshUI();
    });

    clone.querySelector(`.${CLASSES.removeButton}`).addEventListener("click", (event) => {
        event.stopPropagation();
        clone.remove();
        refreshUI();
    });

    return clone;
};

FILTERS.all.classList.add(CLASSES.buttonActiveClass);

todosData.forEach((data) => list.appendChild(createItem(data.title, data.completed)));

filterButtons.forEach((button) =>
    button.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove(CLASSES.buttonActiveClass));
        button.classList.add(CLASSES.buttonActiveClass);
        refreshUI();
    })
);

addButton.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) {
        return;
    }

    list.prepend(createItem(text));
    input.value = "";
    refreshUI();
});

refreshUI();
