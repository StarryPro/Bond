//Load Components
import Home from './components/Home/Home';
import Login from './components/Home/Login';
import SignUp from './components/Home/SignUp';

//Route Setting
export const routes = [
    {path: '/', component: Home},
    {path: '/Login', component: Login},
    {path: './SignUp', component: SignUp}
]