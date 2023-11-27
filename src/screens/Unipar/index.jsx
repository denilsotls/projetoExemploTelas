import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';


export default function Unipar({navigation}){

    return(
        <View style={styles.container}>
            <Text style={styles.textUnipar} >UNIPAR</Text>
            <Button title='INICIAR' color={'#01633D'} onPress={()=> navigation.navigate('Home')}/>
        </View>

    )
}