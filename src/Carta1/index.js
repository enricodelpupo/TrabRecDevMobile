import * as React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Link } from '@react-navigation/native';
import styles from './styles';


export default function Carta1(){
    return(
        <View style={styles.container}>
            <View style={styles.card}> 
                <View style={styles.titulo1}>
                    <Text style={styles.texto1}> Carta 1</Text>
                </View>

                <Image source={require('../../assets/cajado.png')} style={styles.imagem}></Image>
                <Text style={styles.texto2}> Cajado </Text>
                <Text style={styles.descricao}>
                    Esta carta permite que o jogador cause o dobro de dano no inimigo.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.txtbutton}>Trocar carta</Text>
                </TouchableOpacity>
                <Link to={{ screen: 'Carta2' }} style={styles.link}>
      Próxima carta →
    </Link>
            </View>
        </View>
    )
}