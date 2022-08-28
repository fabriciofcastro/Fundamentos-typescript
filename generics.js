/**
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */
function useState() {
    var state;
    function get() {
        return state;
    }
    function set(newState) {
        state = newState;
    }
    return { get: get, set: set };
}
var newState = useState();
newState.get();
//newState.set("fabricio")
newState.set(1125);
