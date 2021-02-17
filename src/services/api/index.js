import axios from 'axios';

const request = axios.create({
    baseURL: 'https://api.snaptaxi.uz'
});

request.defaults.params = {};
request.defaults.params['_f'] = 'json';
request.defaults.headers.common['Accept'] = 'application/json';
request.defaults.headers.common['Accept-Language'] = 'ru';
request.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';


const setToken = store => {
    function select(state) {
        return state.user.token
    }

    let currentValue;

    function handleChange() {
        let previousValue = currentValue;
        currentValue = select(store.getState());

        if (previousValue !== currentValue) {
            request.defaults.headers.common['Authorization'] = `Bearer ${currentValue}`;
        }
    }

    store.subscribe(handleChange);

};


export default {
    request,
    setToken,
};
