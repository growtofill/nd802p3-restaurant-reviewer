import { createElement } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import reviewerApp from './reducers';

const store = createStore(reviewerApp);

document.addEventListener('DOMContentLoaded', () => {
    render(
        createElement(Provider, { store }, createElement(App)),
        document.getElementById('root')
    );
});
