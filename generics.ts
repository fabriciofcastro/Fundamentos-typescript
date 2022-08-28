/**
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */

function useState<T extends number = number > () {
    let  state: T;


    function get() {
        return state;
    }

    function set(newState: T) {
        state = newState
    }

    return { get, set }

}

let newState = useState<number>()
newState.get()
//newState.set("fabricio")
newState.set(1125)
