import { combineReducers } from 'redux'


const initial = {
    counter: 0
}

const store = ((state = initial, action) => {

    switch (action.type) {
        case 'counter:increment':
            return {...state, counter: state.counter + 1};

        case 'counter:reset':
            const {value} = action;
            return {...state, counter: value};

        default:
            return state;
    }
});

const Store = combineReducers({
    store
})

export default Store
