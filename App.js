import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './src/styles/Style';

export default function App() {
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState('')


  const numberValue = (buttonValue) => { //Get Number
    if (result !== null) {
      setHistory("")
      setResult(null)
    }
    setFirst(first + buttonValue)

  }

  const operationType = (mathOperation) => { //Get Operation Type
    setOperation(mathOperation)
    setSecond(first)
    setHistory(first + ' ' + mathOperation)
    setFirst('')

  }

  const clear = () => { //Clear Screen
    setFirst("");
    setSecond("");
    setOperation("");
    setResult(null);

  };

  const getResult = () => {

    switch (operation) {

      case '+':
        clear();
        setResult(parseInt(second) + parseInt(first));
        setHistory(second + ' ' + operation + ' ' + first + ' =')
        break;

      case '-':
        clear();
        setResult(parseInt(second) - parseInt(first));
        setHistory(second + ' ' + operation + ' ' + first + ' =')
        break;

      case '*':
        clear();
        setResult(parseInt(second) * parseInt(first));
        setHistory(second + ' ' + operation + ' ' + first + ' =')
        break;

      case '/':
        clear();
        setResult( 
          (parseFloat(second) % parseFloat(first)) == 0 ? 
          (parseFloat(second) / parseFloat(first)) : (parseFloat(second) / parseFloat(first)).toFixed(3)
        );
        setHistory(second + ' ' + operation + ' ' + first + ' =')
        break;

      default:
        break;

    }

  }

  const numberDisplay = () => {

    if (first == '' && result == null) { //Shows 0 if no number has been selected
      return <Text>0</Text>
    }

    else if (result == null) { //Show the current number
      return <Text>{first}</Text>;
    }

    else if (result !== null) { //Show the result
      return (
        <Text>{result?.toString()}</Text>
      );
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.operationDisplay}>{history}</Text>
      <Text style={styles.display}>{numberDisplay()}</Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnNumber} onPress={() => numberValue('7')}>
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNumber} onPress={() => numberValue('8')}>
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNumber} onPress={() => numberValue('9')}>
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOperation} onPress={() => operationType('/')}>
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnNumber} onPress={() => numberValue('4')}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNumber} onPress={() => numberValue('5')}>
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNumber} onPress={() => numberValue('6')}>
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOperation} onPress={() => operationType('*')}>
          <Text style={styles.text}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnNumber} onPress={() => numberValue('1')}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNumber} onPress={() => numberValue('2')}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNumber} onPress={() => numberValue('3')}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOperation} onPress={() => operationType('-')}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnSpecial} onPress={() => clear()}>
          <Text style={styles.text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNumber} onPress={() => numberValue('0')}>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSpecial} onPress={() => getResult()}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOperation} onPress={() => operationType('+')}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 36 }}></View>
    </View>
  )
}
