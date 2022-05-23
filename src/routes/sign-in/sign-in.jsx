import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"

import SignUpForm from "../../components/sign-up-form/sign-up-form"

import { 
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth, 
    auth
} from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Test sign in</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn

// useEffect(async () => {
//     const repsonse = await getRedirectResult(auth)

//     if(repsonse) {
//         const userDocRef = await createUserDocumentFromAuth(repsonse.user)
//     }
// }, [])

{/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
