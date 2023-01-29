import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import ExpiriencePage from './pages/expirience';
import HomePage from './pages/home';
import SkillsPage from './pages/skills';
import WorksPage from './pages/works';
import ContactPage from './pages/contact';
import { PageWrapper } from './components';
import { store } from './store';
import urls from './constants/urls';
import "./assets/scss/main.scss";


export default function App(){
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={urls.home} element={
                        <PageWrapper>
                            <HomePage />
                        </PageWrapper>
                    } />
                    <Route path={urls.expirience} element={
                        <PageWrapper>
                            <ExpiriencePage />
                        </PageWrapper>
                    } />
                    <Route path={urls.skills} element={
                        <PageWrapper>
                            <SkillsPage />
                        </PageWrapper>
                    } />
                    <Route path={urls.works}  element={
                        <PageWrapper>
                            <WorksPage />
                        </PageWrapper>
                    } />
                    <Route path={urls.contact}  element={
                        <PageWrapper>
                            <ContactPage />
                        </PageWrapper>
                    } />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}