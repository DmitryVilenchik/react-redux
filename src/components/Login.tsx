import { authActions } from "../redux/authSlice";
import {useDispatch} from 'react-redux'
export const Login: React.FC = ()=>{
    const dispatch = useDispatch();
    return (<>
    <input placeholder="Enter user name"></input>
    <button onClick={() => dispatch(authActions.login())}>Login</button>
    </>)
}