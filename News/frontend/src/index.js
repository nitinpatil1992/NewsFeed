import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import SimpleForm from "./js/components/SimpleForm";
import { addNews } from "./js/actions/index";
import { fetchNews } from "./js/actions/newsActions"
import Header from "./js/components/Header";
import store from "./js/store/index"
import { Provider } from "react-redux";

import NewsContainer from "./js/components/NewsContainer"

ReactDOM.render(
    <Provider store = { store } >
    <Header />
    <SimpleForm />
    <NewsContainer />
    </Provider >,
    document.getElementById('app')
);


