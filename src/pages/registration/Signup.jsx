import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firedb } from '../../firebase/FirebaseConfig'
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader'


function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const {loading, setLoading} = context;

    //========> Name , Email, Passsword Validation  <=========

    const signup = async () => {

        setLoading(true);

        if(name === "" || email === "" || password === ""){
            return toast.error("All Feilds are Required");
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            const user = {
                name : name,
                uid : users.user.uid,
                email : users.user.email,
                time : Timestamp.now()
            }

            const userRef = collection(firedb, "users")
            await addDoc(userRef, user);
            toast.success("Signup Successfully")
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    
}

export default Signup