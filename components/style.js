import { StyleSheet } from 'react-native';

 const colors = {
    primary: '#00B5E2',
    secondary: '#E5F8FB',
    white: '#fff',
    profilecolor: '#0077C9'
  };

  const styles = StyleSheet.create({
    containerSafe: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor:  colors.white,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',

    },
    header: {
        
    flexDirection: 'row',
    justifyContent: 'space-between',
      backgroundColor: colors.primary,
      width: '100%',
      height: 80,
      alignItems: 'center',
      paddingHorizontal: 30,

    },
    headertext: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#cccc',
    },
    quote: {
        flexDirection: 'columnd',
      justifyContent: 'space-between',
        marginVertical: 20,
        backgroundColor:colors.primary,
        width: '90%',
        height: 150,
        alignItems: 'left',
        padding: 20,
        borderRadius: 10,


        },
    quoteText: {
        fontSize: 14,
        fontWeight: 'bold',
        color:  colors.white,
    },
    quoteButton: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.primary,
      backgroundColor: colors.secondary,
      padding: 5,
      borderRadius: 20,
      textAlign: 'center',

  },

    todoList: {
        backgroundColor: `${colors.primary}20`,
        width: '90%',
        height: 100,
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 20,
    },
    
    todoText: {
        paddingVertical: 10,
        paddingLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.white,
    },
    todoitem: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        padding:10,
        borderRadius: 10,
    },
    todoitemdone: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: `${colors.primary}30`,
        padding:10,
        borderRadius: 10,
    },
    input: {
        flexDirection: 'column',
      justifyContent: 'flex-end',
        marginVertical: 20,
        backgroundColor: colors.secondary,
        width: '90%',
        height: 150,
        alignItems: 'left',
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingBottom: 20,

        },
    inputinside: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.primary,
        width: '80%',
    },
    inputButton: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.white,
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 20,
        textAlign: 'center',

    },

    containerLogin: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      height: '100%',
    },
    inputLogin: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
        marginVertical: 20,
        backgroundColor: `${colors.primary}20`,
        width: 250,
        height: 150,
        alignItems: 'left',
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingBottom: 20,
    },
    loginTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: 20,
    },
    headerbuttonn: {
      fontSize: 5,
      fontWeight: 'bold',
      color: colors.white,
    },
    profilecontainer:{
      flex: 1,
      backgroundColor:  colors.white,
      alignItems: 'center', 
      justifyContent: 'space-between',
      textAlign: 'center',
      paddingBottom:50,
    },
    profileimage:{

      backgroundColor: colors.white,
      alignItems: 'center', 
      justifyContent: 'space-between',
      textAlign: 'center',
      padding:20,
    },
    todocontainer: {
      flex: 1,
      backgroundColor:  colors.white,
      alignContent: 'center',

      textAlign: 'center',
      paddingBottom:50,
    },
    todotext: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.primary,
      textAlign: 'center',
      margin: 20,
    },
    todoDescription: {
      
        fontSize: 14,
        color: '#000',
        margin: 20,
        marginBottom: 10,
        paddingTop: 30,
        padding:30,
        width: '90%',
        textAlign: 'start',
        backgroundColor: `${colors.primary}20`,
        borderRadius: 10,


    },

    inputitem: {
      flexDirection: 'column',
      width: '100%',
        marginVertical: 5,
    },
    inputTitle:{
      fontSize: 14,
    },
    centeredText: {
      textAlign: 'center',
    },
    /* ios blue text */
    profiletext: {
      color: colors.profilecolor,
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    profilemailtext:{
    color: colors.profilecolor,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,},
    profileoptions:{
      flex:2,
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      width: '90%',
    },
    profileoption: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '200',
      width: '100%',
      padding: 12,


    }
  

  });

export default styles;