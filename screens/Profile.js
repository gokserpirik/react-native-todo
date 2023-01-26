import { View, Text, Image } from 'react-native'
import React from 'react'
import { AppTodoButton } from './AppTodo'
import styles from '../components/style'
import { auth } from '../firebase';

export default function Profile({ navigation}) {
   const currentUser = auth.currentUser;


  return (
    <View style={styles.profilecontainer}>
        {/* Profile Image */}
        <View style={styles.profileimage}>
        <Image source={{
          uri: 'https://images.unsplash.com/photo-1592390573190-bfcc5222adec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={{width: 200, height: 200, borderRadius: 100}}
        resizeMode="cover"
        />

        <Text style={styles.profiletext}> {currentUser.displayName || "User"} </Text>
        <Text style={styles.profilemailtext}> {currentUser.email} </Text>

        </View>
        <View style={styles.profileoptions}>
            <View style={{borderBottomColor: '#00000050', borderBottomWidth: 1, width: '100%'}}>
            <Text style={styles.profileoption}>Option1</Text>
            </View>
            <View style={{borderBottomColor: '#00000050', borderBottomWidth: 1, width: '100%'}}>
            <Text style={styles.profileoption}>Option2</Text>
            </View>
            <View /* style={{borderBottomColor: '#00000050', borderBottomWidth: 1, width: '100%'}} */>
            <Text style={styles.profileoption}>Option3</Text>
            </View>

        </View>


        <AppTodoButton/>

    </View>
  )
}