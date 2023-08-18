import { useState } from 'react'
import styles from './AuthPage.module.scss'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../componentsSignUpForm/SignUpForm'
import Logo from '../../components/Logo/Logo'

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <main className={styles.AuthPage}>
            <div>
                <Logo />
                <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
            </div>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </main>
    )
}