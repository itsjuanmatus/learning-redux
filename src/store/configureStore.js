import reducer from './bugs';
import { configureStore } from 'redux-starter-kit';

export default function () {
    return configureStore({ reducer })
};