import { createStore } from 'redux';
import reducer from './reducer/reducer'

const store = createStore(reducer);

export default store;
/*
const ConnectedApp = connect((state) => {
    console.log(state);
    return state;
})(App);

// Container component
ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('root')
);*/
