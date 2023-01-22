import { collection, addDoc} from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { db } from "../firebaseApp";


export async function createPost(user, content) {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
          user: {
            name: "Braian Pita",
            overview: "University of Houston - Computer Information Systems",
            avatar_url: null,
          },
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          content:content,
        });
        return docRef;
    } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    }
}