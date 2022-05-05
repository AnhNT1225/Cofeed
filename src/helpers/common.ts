import { collection, CollectionReference, DocumentData, getFirestore } from "firebase/firestore"
import { ref,  getDownloadURL } from "firebase/storage"
import { db, storage } from "../firebase"
import { IPost } from "../interface/post"
import { IUser } from "../interface/user"

// Export firestore incase we need to access it directly

// This is just a helper to add the type to the db responses
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>
}

// export all your collections
export const usersCol = createCollection<IUser>('users')
export const postsCol = createCollection<IPost>('posts')


export const getImage =(image : string) => {
  const imageRef = ref(storage, `images/${image}.png`)
  console.log(imageRef)
  // imageRef.getDownloadURL().then((url : string) => {
  //   image = url
  //   this.setState(state)
  // }).catch((error: string) => {
  //   // Handle any errors
  //   console.log('error: ', error)
  // })
}