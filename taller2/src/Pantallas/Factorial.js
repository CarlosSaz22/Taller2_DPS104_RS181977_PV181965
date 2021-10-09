import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import colors from '../utils/colors';
import { Button } from 'react-native-elements';
import Resultado from './Resultado';

export default function Factorial() {
  const [numero1, setNumero1] = useState('');
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  let regg = /^([0-9])+$/;

  useEffect(() => {
    if (!numero1) reset();
  }, [numero1]);

  const factorial = () => {
    reset();

    if (!numero1.trim()) {
      setErrorMessage('Añade el primer número ');
    } else if (!regg.test(numero1)) {
      setErrorMessage(
        'Error. Solo se admiten números enteros positivos.'
      );

    }else {
      let floatNumero1 = parseFloat(numero1);
      let resultado=floatNumero1;
      for(let i=(floatNumero1-1);i>=1; i--){
          resultado*=i;
      }
        if (resultado == 0) {
        setTotal('1');
      } else {
        setTotal(resultado);
      }
     
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  const clean = () => {
    setErrorMessage('');
    setTotal(null);
    setNumero1('');
    this.firsttextInput.focus();
  };

  return (
    <>
      <View style={styles.viewForm}>
        <Text style={styles.label}>Número a factorizar</Text>
        <View style={styles.viewInputs}>
          <TextInput
            placeholder="Ingresa el número"
            keyboardType="numeric"
            value={numero1}
            style={styles.input}
            ref={(input) => {
              this.firsttextInput = input;
            }}
            onChange={(e) => setNumero1(e.nativeEvent.text)}
          />

         
        </View>
        <View style={styles.boton}>
          <Button onPress={factorial} title="Encontrar factorial" />
        </View>
        <View style={styles.boton}>
          <Button
            buttonStyle={{ backgroundColor: 'red' }}
            onPress={clean}
            title=" Limpiar"
          />
        </View>
      </View>
      <Resultado total={total} errorMessage={errorMessage} />
    </>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    top: 70,
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