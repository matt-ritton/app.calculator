import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#E1FFC0',
    },

    btnContainer: {
        maxWidth: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },

    btnNumber: {
        height: 92,
        width: 92,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 30,
        backgroundColor: '#B4DC7F'
    },

    btnOperation: {
        height: 92,
        width: 92,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 30,
        backgroundColor: '#90CC4C'
    },

    btnSpecial: {
        height: 92,
        width: 92,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 30,
        backgroundColor: '#85A95B'
    },

    text: {
        fontSize: 48,
        color: '#E0FFB7'
    },

    display: {
        fontSize: 96,
        alignSelf: 'flex-end',
        color: '#90CC4C',
        marginRight: 16
    },

    operationDisplay: {
        fontSize: 32,
        alignSelf: 'flex-end',
        color: '#C0DF9C',
        marginRight: 16
    }

})

export default styles;