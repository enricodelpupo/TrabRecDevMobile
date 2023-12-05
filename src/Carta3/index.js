import * as React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Link } from '@react-navigation/native';
import styles from './styles';


export default function Carta3 (){
    return(
        <View style={styles.container}>
            <View style={styles.card}> 
                <View style={styles.titulo1}>
                    <Text style={styles.texto1}> Carta 3</Text>
                </View>

                <Image source={require('../../assets/pistola.png')} style={styles.imagem}></Image>
                <Text style={styles.texto2}> Pistola </Text>
                <Text style={styles.descricao}>
                    Esta carta permite que o jogador caminhe mias rápido pelo mapa e atire com mais precisão.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.txtbutton}>Trocar carta</Text>
                </TouchableOpacity>
                <Link to={{ screen: 'Carta1' }} style={styles.link}>
      Próxima carta →
    </Link>
            </View>
        </View>
    )
}