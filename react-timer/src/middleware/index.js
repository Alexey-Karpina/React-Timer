
const actionLogger = (store) => (next) => (action) => {
    console.groupCollapsed("Action Type", action.type);
    console.log("Prev State", store.getState());
    console.log("Action", action);
    const res = next(action);
    console.log("Updated State", store.getState());
    console.groupEnd();
    return res;
}

export default actionLogger;