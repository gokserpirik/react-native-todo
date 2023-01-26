import {  Text, Button, TextInput, ScrollView } from 'react-native'
import React from 'react'
import styles from '../components/style'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedTodo, updateDescribedTodo } from '../redux/slice'


export default function Todo({route, navigation}) {
    const {item} = route.params
    const todo = useSelector(state => state.user.value.userData.todos.find(todo => todo.id === item.id))
    const [text, setText] = React.useState(item.description || "description")
    console.log(text)
    const dispatch = useDispatch()


  return (
    <ScrollView style= {styles.todocontainer}>
      <Text style={styles.todotext}
        onPress={() => dispatch(updateSelectedTodo(item))}
      >{todo.completed  ?  'Completed' : 'Not Completed'}</Text>
      <Text style={styles.centeredText}>
        Extra details about the todo:
      </Text>
      <TextInput style={styles.todoDescription} value={text} onChangeText={text => setText(text)} multiline={true} />
      <Button title="Edit To-Do" onPress={()=> {
        dispatch(updateDescribedTodo({...todo, description: text}))
      } } />

    </ScrollView>
  )
}