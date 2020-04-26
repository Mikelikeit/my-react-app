import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import { Route, Switch } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";



const App = (props) => {
    return (
        < div className='app-wrapper'>
            <Header />
            <NavBar />
            <div className='app-wrapper-content'>
                {/* TODO: Нужно использовать Switch (https://reacttraining.com/react-router/web/api/Switch) */}
                <Switch>
                    {/* TODO: render можно заменить на component */}
                    <Route path='/profile' component={Profile} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                    <Route path='/users' component={UsersContainer} />
                    <Route path='/*' component={UsersContainer} />
                </Switch>
            </div>
        </div>

    );
}

export default App;
