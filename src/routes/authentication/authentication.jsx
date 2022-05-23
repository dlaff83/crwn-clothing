import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"

import SignUpForm from "../../components/sign-up-form/sign-up-form"
import SignInForm from "../../components/sign-in-form/sign-in-form"

import { 
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth, 
    auth
} from "../../utils/firebase/firebase.utils"

const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication

// useEffect(async () => {
//     const repsonse = await getRedirectResult(auth)

//     if(repsonse) {
//         const userDocRef = await createUserDocumentFromAuth(repsonse.user)
//     }
// }, [])

{/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
