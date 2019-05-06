import { types } from "mobx-state-tree"

const ItemMenu = types
    .model("ItemMenu", {
        name: types.string
    })
    .actions(self => ({
        
    }))

const Store = types.model("Store", {
    itemsMenu: types.maybe(types.array(ItemMenu))
}).actions(self => {
    const addItem = (name) => {
        self.itemsMenu.push(ItemMenu.create({name}));
    }

    return {addItem};
})

// create an instance from a snapshot
const store = Store.create({
    ItemMenus: []
});

export default store;
