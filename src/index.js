import { createElement } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter.jsx';
import reviewerApp from './reducers';

const store = createStore(reviewerApp);

document.addEventListener('DOMContentLoaded', () => {
    render(
        createElement(Provider, { store }, createElement(AppRouter)),
        document.getElementById('root')
    );
});
