import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import colors from '../utils/colors';
import { Button } from 'react-native-elements';
import Resultado from './Resultado';
export default function Suma() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  let regg = /^-?[0-9]\d*(\.\d+)?$/;

  useEffect(() => {
    if (!numero1 && !numero2) reset();
  }, [numero1, numero2]);

  const sumar = () => {
    reset();
    if (!numero1.trim()) {
      setErrorMessage('Añade el primer número ');
    } else if (!regg.test(numero1)) {
      setErrorMessage(
        'Error campo número 1.Solo se admiten números entero o decimales positivos y negativos'
      );
    } else if (!numero2.trim()) {
      setErrorMessage('Añade el segundo número');
    } else if (!regg.test(numero2)) {
      setErrorMessage(
        'Error campo número 2.Solo se admiten números entero o decimales positivos y negativos'
      );
    } else {
      let floatNumero1 = parseFloat(numero1);
      let floatNumero2 = parseFloat(numero2);
      const suma = floatNumero1 + floatNumero2;
      setTotal(suma);
    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
      <View style={styles.viewForm}>
        <Text style={styles.label}>Número 1</Text>
        <View style={styles.viewInputs}>
          <TextInput
            placeholder="Ingresa el primer número"
            keyboardType="decimal-pad"
            style={styles.input}
            onChange={(e) => setNumero1(e.nativeEvent.text)}
          />

          <Text style={styles.label}>Número 2</Text>
          <TextInput
            placeholder="Ingresa el segundo número"
            keyboardType="decimal-pad"
            style={[styles.input, styles.inputPercentage]}
            onChange={(e) => setNumero2(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.boton}>
          <Button onPress={sumar} title=" Sumar" />
        </View>
      </View>
      <Resultado total={total} errorMessage={errorMessage} />
    </>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    top: 40,
    width: '100%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'column',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '100%',
    marginTop: 10,
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '100%',
    marginLeft: -5,
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    margintop: 10,
  },
  boton: {
    margin: 10,
  },
});
