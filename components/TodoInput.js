import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slice'
import { setInputOpen } from '../redux/slice'


export default function TodoInput() {
    const dispatch = useDispatch()

    const [text, setText] = React.useState('')

  return (
    <View style={styles.input}>
       <View style={styles.inputinside}>
       <TextInput style={styles.inputText} placeholder="Add a todo" onChangeText={text => setText(text)} value={text} />

        <Text
            style={styles.inputButton}
            onPress={() => {
                console.log(text)
                dispatch(addTodo({text: text}))
                dispatch(setInputOpen(false))


            }}
        >Send</Text>

       </View>
    </View>
  )
}