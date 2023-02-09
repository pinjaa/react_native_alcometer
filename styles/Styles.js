import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
        backgroundColor: 'white'
    },
    radioStyle: {
        flexDirection: "row", 
        alignItems: "center",
    },
    radioText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    title: {
        fontSize: 40,
        fontWeight: "bold"
    },
    textInput:{
        padding: 5,
        borderWidth:1,
        borderRadius: 5,
        marginBottom: 10,
        width: 90,
        height: 70,
        backgroundColor: 'white',
        fontSize: 20
    },
    label:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10
    },
    result:{
        fontSize: 20,
        fontWeight: "bold",
        color: 'green',
        backgroundColor: '#30362f',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    resultRed: {
        color: 'red'
    },
    resultYellow: {
        color: 'yellow'
    },
    lightTheme: {
        backgroundColor: '#d3bccc',
    },
    darkTheme: {
        backgroundColor: '#30362f',
    },
    darkText: {
        color: 'white'
    },
    text: {
        color: 'black'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#61c9a8',
      },
      buttontext: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      numericInput: {
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 5,
        borderColor: 'white'
      }, 

    
});
  