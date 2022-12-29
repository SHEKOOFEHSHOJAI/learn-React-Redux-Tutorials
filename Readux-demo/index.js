console.log("iiiiiii")
const redux = require('redux')
const createStore = redux.createStore
const BUY_CACK = "BUY_CACK"
// action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }

}

const initialState = {
    numOfCakes: 10,
}
const reduser = (State = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...State,
            numOfCakes: this.state.numOfCakes - 1
        }
        default: return State
    }
}

// access to state getState()
// update state   dispatch()

const store = createStore()