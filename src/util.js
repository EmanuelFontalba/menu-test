import store from "./Store";

const sendMenuSupermarket = (name) => {
    store.addItem(name);
}

export { sendMenuSupermarket};