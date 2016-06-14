var reducer1 = function(state = {}, action) {
    switch(action.type) {
        case "SAY_SOMETHING":
            return Object.assign({message: action.word}, state);
        default:
            return state;
    }
}


var reducer2 = function(state = [], action) {
    switch(action.type) {
        case "DO_SOMETHING":
            return Object.assign({message: action.value}, state);
        default:
            return state;
    }
}


export let SAY = reducer1;
export let DO = reducer2;
