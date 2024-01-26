import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import app from './init'
import bcrypt from 'bcrypt'

const firestore = getFirestore(app)


// menampilkan data barang
export const retriveData = async (collectionName: string) => {
    const snapshot = await getDocs(collection(firestore, collectionName))
    const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    return data
}


// mengambil data barang berdasarkan id
export async function retriveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id))
    const data = snapshot.data()
    return data
}


// register normal
export async function signUp(userData: { fullName: string, email: string, password: string, role?: string }, callback: Function) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email))
    const snapshot = await getDocs(q)
    const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    if (data.length > 0) {
        callback({ status: false, message: 'email already exist' })
    } else {
        userData.password = await bcrypt.hash(userData.password, 10)
        userData.role = 'member'
        await addDoc(collection(firestore, "users"), userData).then(() => {
            callback({ status: true, message: 'success' })
        }).catch((err) => {
            console.log(err);
            callback({ status: false, message: 'something went wrong' })
        })

    }
}

// penggambilan login firebase dan next auth
export async function signIn(userData: { email: string }) {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email))
    const snapshot = await getDocs(q)
    const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    if (data) {
        return data[0]
    } else {
        return null
    }
}
