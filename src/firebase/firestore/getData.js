import firebase_app from '../config';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app)
export default async function getData(collection, id){
	let docRef = doc(db, collection, id);
	let result = null;
	let error = null;
	let imageUrl = null
	try{
		result = await getDoc(docRef);
		if (result.exists()){
			imageUrl = result.data().imageUrl 
		}
	}
	catch (e){
		error = e;
	}
	return {result, error, imageUrl};
}