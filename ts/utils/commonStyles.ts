import { StyleSheet } from "react-native";



export const commonStyles = StyleSheet.create({

    container: {backgroundColor: 'white'},
    content: {flex: 1 , flexDirection: 'column', alignContent: 'center',  paddingHorizontal: 16},

    /**
     * SPACER
     */

    spacer: {width: '100%', height: 16},
    xlSpacer: {width: '100%', height: 50, flex:1},


    /**
     * TEXT
     */
    bold: {fontWeight: '700'},

    header: {
        fontWeight: '700', 
        textAlign: 'center',
        paddingVertical: 16
    },

    textInput: {
        marginTop: 3,
        paddingTop: 0,
        paddingHorizontal: 3,
        paddingBottom: 3,
        height: 20, 
        color: '#59A0FF',
        fontWeight: '700'
    },

    textInputForm: {
        marginTop: 3,
        borderBottomColor: '#FF7B1F',
        borderBottomWidth: 0.33,
        paddingTop: 0,
        paddingBottom: 3,
        height: 30,
        fontWeight: '700',
        fontSize: 25,
        letterSpacing: 10
    },

    /**
     * BUTTON
     */

    button: {backgroundColor: '#59A0FF', flexDirection: 'row', justifyContent: 'space-around'},
    buttonText:{textAlign:'center', color: '#FFFFFF'},

    buttonPolice: {backgroundColor: '#FF7B1F', flexDirection: 'row', justifyContent: 'space-around'},

    /**
     * IMAGE
     */

    repImage: {
        alignSelf: 'center', 
        height: 60, 
        bottom: 0, 
        width: 60, 
        resizeMode: 'contain'
    },

    repImageSmall: {
        alignSelf: 'center', 
        height: 30, 
        bottom: 0, 
        width: 30, 
        resizeMode: 'contain'
    }
});