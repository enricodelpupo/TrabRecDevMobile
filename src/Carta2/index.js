import * as React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Link } from '@react-navigation/native';
import styles from './styles';

export default function Carta2(){
    return(
        <View style={styles.container}>
            <View style={styles.card}> 
                <View style={styles.titulo1}>
                    <Text style={styles.texto1}> Carta 2</Text>
                </View>

                <Image source={require('../../assets/chapeu.png')} style={styles.imagem}></Image>
                <Text style={styles.texto2}> Chapéu </Text>
                <Text style={styles.descricao}>
                    Esta carta permite que o jogador veja por um determinado tempo, a posição dos seus inimigos.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.txtbutton}>Trocar carta</Text>
                </TouchableOpacity>
                <Link to={{ screen: 'Carta3' }} style={styles.link}>
      Próxima carta →
    </Link>
            </View>
        </View>
    )
}