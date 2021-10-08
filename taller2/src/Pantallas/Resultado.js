import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Result(props) {
  const { total, errorMessage } = props;
  return (
    <View style={styles.content}>
      {total &&(
        <View style={styles.boxResult}>
          <Text style={styles.title}>Resultado : {total}</Text>
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}
function DataResult(props) {
  const { title, value } = props;
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    position: 'relative',
    marginTop: 300,
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop:30
  },
});
