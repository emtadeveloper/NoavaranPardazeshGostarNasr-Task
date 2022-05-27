import produce from "immer";
import { Product, Status } from "./actionType";

const initState = { status: "idle", entities: {}, Comparison: {} };

export const shopReducer = produce((state, action) => {
    switch (action.type) {
        case Product.productLoadingStarted:
            state.status = Status.LOADING;
            break;
        case Product.productLoadedFailes:
            state.status = Status.ERROR;
            break;
        case Product.productLoadedSuccess:
            const product = action.payload;
            const newEntitiesProduct = {};
            product.forEach((item) => {
                newEntitiesProduct[item.id] = { ...item, number: 1 };
            });
            state.entities = newEntitiesProduct;
            state.status = Status.IDLE;
            break;
        case Product.addComparison:
            const value = action.payload;
            const newEntitiesAddCard = {};
            if (Object.keys(state.Comparison).length < 4) {
                newEntitiesAddCard[value.id] = value;
                state.Comparison = { ...state.Comparison, ...newEntitiesAddCard };
            }
            // Object.keys(state.Comparison).length <= 4 ? (newEntitiesAddCard[value.id] = value) : newEntitiesAddCard;
            // state.Comparison = { ...state.Comparison, ...newEntitiesAddCard };
            break;
        case Product.removeComparison:
            const id = action.payload;
            delete state.Comparison[id];
            break;
    }
}, initState);
