import { View, Text, FlatList,  Alert } from 'react-native'
import React from 'react'
import styles from './style'
import { useSelector, useDispatch } from 'react-redux'
import { updateSelectedTodo, deleteTodo } from '../redux/slice'



export default function TodoList({navigation}) {
    const todos = useSelector(state => state.user.value.userData.todos)
    const dispatch = useDispatch()
    const updateTodo = (id) => {
        dispatch(updateSelectedTodo({
            id: id,
        }))}
    const [touch, setTouch] = React.useState(0)
  return (
    
    <FlatList 
        style={styles.todoList}
        data={ todos }
        renderItem={({item}) => (
            <View style={ item.completed ? styles.todoitemdone : styles.todoitem} 
            onTouchEnd={
                ()=>  Alert.alert('Choose Event', '', [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                      },
                   
                    {text: 'Delete', onPress: () => dispatch(deleteTodo(item)),style: 'destructive', },

                  

                      {
                        text: 'Details',
                        onPress: () => navigation.navigate('Todo', {item}),
                      },
                        
                     
                      {
                        text: "(un)done",
                        onPress: () => dispatch(updateSelectedTodo(item)),
                        style: 'cancel',
                      },
                     
                     
                  ])
            }
            >
                <Text style={styles.todoText}>{item.text}</Text>
            </View>

            )}
        keyExtractor={item => item.id}
    />
  )
}