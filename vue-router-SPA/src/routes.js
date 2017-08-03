//Load Components
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Password from './components/Password';

//Route Setting
export const routes = [
    {path: '/', component: Home},
    {path: '/Login', component: Login},
    {path: '/SignUp', component: SignUp},
    {path: '/Password', component: Password}
]