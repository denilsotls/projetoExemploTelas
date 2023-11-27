import * as React from 'react';
import { Button, View, Text, TextInput} from 'react-native';
import styles from './styles';
import { useState } from 'react';



export default function HomeScreen({ navigation }) {
  
   const [myName, setMyName]= useState(null)
   const [mySobrenome, setMySobrenome]= useState(null)
   

    return (
      <View style={styles.container}>
        <Text style={styles.textName} >Informe seu nome</Text>
        <TextInput style={styles.imputName} onChangeText={setMyName} value={myName}/>
        <Text style={styles.textName2}>Informe seu sobrenome</Text>
        <TextInput style={styles.imputName} onChangeText={setMySobrenome} value={mySobrenome}/>
        <View style={styles.viewButton}>
        <Button color={'#01633D'}  title='PROXIMO' onPress={()=> navigation.navigate('Dados', {myName, mySobrenome})}/>
        </View>
      </View>
    );
  }