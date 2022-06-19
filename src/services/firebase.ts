import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}

initializeApp(firebaseConfig)
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const credentials = GoogleAuthProvider.credentialFromResult(result)
    const accessToken = credentials?.accessToken
    const user = result.user
    if (user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
      throw new Error('This feature only available for admin')
    }
    return { accessToken, user }
  } catch (error: unknown) {
    throw new Error((error as any)?.message ?? 'Error signing in with Google')
  }
}
