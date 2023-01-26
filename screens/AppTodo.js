
import {SafeAreaView, Button } from 'react-native';
import styles from '../components/style';
import  Quote  from '../components/Quote';
import TodoList  from '../components/TodoList';
import { useDispatch, useSelector} from 'react-redux';
import { setInputOpen} from '../redux/slice';
import { SignOut , auth} from '../firebase';
import TodoInput from '../components/TodoInput';
import React,  { useState , useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { loginData, setUserCredential, logoutUser } from '../redux/slice';
import { doc, getDoc } from "firebase/firestore";
import db  from '../firebase';


export default function AppTodo({navigation}) {



   const [initializing, setInitializing] = useState(true);
    useEffect(() => {      
   onAuthStateChanged(auth, async (user) => {
    if (user) {

        dispatch(setUserCredential(user.toJSON()))
       
        async function fetchData() {
            const docRef = doc(db, "users","A0GNChgRaFOhzexzewJB4IhqO4A3");
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              dispatch(loginData(docSnap.data()))
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
  
        }
        fetchData();
        

      if (initializing) setInitializing(false);
      // ...
    } else {
        navigation.navigate('Login')
        dispatch(setUserCredential(null))
    }
  });


      
    }, [])

  /*  */
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.value)

 

  return (
    <SafeAreaView style={styles.container}>
    {user.appSamples.inputOpen ? <TodoInput  /> : <Quote />}
    <TodoList navigation={navigation}/>
  </SafeAreaView>
  );
}







export function AppTodoButton() {
  const openInput = () => {
    dispatch(setInputOpen())
  }
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.value)

  return (
    <Button title="Sign Out" onPress={()=> { SignOut()
      dispatch(logoutUser())} } />
    
    
  )
}


