import LoginForm from "../src/components/LoginForm";
import { RecoilRoot } from 'recoil';

function Login() { 
  return(
    <div className="test">
      <RecoilRoot>
        <LoginForm></LoginForm>
      </RecoilRoot>
    </div>
  )
}

export default Login;