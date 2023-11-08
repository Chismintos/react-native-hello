import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const App = () => {
  return (
  
    <View style={styles.contenedor}> 
      <View style={styles.header}>
        <Icon name="ios-flower-outline" size={30}/>
        <Icon name="ios-menu-outline" size={30}/>
      </View>    

      <View style={styles.usuarioContainer}> 
        <Image
        style={styles.image} source={{uri:'https://cdn.discordapp.com/attachments/951723821566681149/1171620564855693433/c777f15bbc8714a3daba87467e3234bf.jpg?ex=655d57ae&is=654ae2ae&hm=7a1bb13e8f6c201439e0a3fcf6a5dd412c4ae0a2cc6bf00016bc35e1d390bd3d&'}}></Image>
        <Text style={styles.textName}>Kanye West</Text>
      </View>

      <View style={styles.iconContainer}>
        <Icon name="ios-notifications-outline" size={40} />
        <Icon name="ios-logo-octocat" size={40}/>
        <Icon name="ios-time-outline" size={40}/>
      </View>

      <View style={styles.hijoB} > 
        <Text style={styles.textoinf}>Following 1680</Text>
        <Text style={styles.textoinf}>Follower 1880</Text>
      </View>

      <View style={styles.hijoC}> 
        <View style={styles.iconTextContainer}>
          <Icon name="shirt-outline" size={30} color="blue" />
          <Text style={styles.iconText}>Theme</Text>
        </View>

        <View style={styles.iconTextContainer}>
          <Icon name="share-social-outline" size={30} color="green" />
          <Text style={styles.iconText}>Share this App</Text>
        </View>

        <View style={styles.iconTextContainer}>
          <Icon name="moon-outline" size={30} color="orange" />
          <Text style={styles.iconText}>Night mode</Text>
        </View>

        <View style={styles.iconTextContainer}>
          <Icon name="settings-outline" size={30} color="purple" />
          <Text style={styles.iconText}> Settings</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <Icon name="calendar-outline" size={30}/>
        <Icon name="ios-planet-outline" size={30}/>
        <Icon name="download" size={30}/>
        <Icon name="musical-notes-outline" size={30}/>
      </View >

    </View>
  )
}

const styles = StyleSheet.create({
  
  header:{
    flex:1.5,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: '#DFCCFB',
    paddingLeft:10,
    paddingRight:10,
  },
  usuarioContainer:{
    flex:7,
    backgroundColor: '#DFCCFB',
    justifyContent: 'center',
    alignItems: 'center'
  },

  hijoB:{
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  
  hijoC:{
    justifyContent:'center',
    alignItems:'center',
    flex:7,
    backgroundColor: '#DFCCFB'
  },

  iconTextContainer: {
    flexDirection: 'row', // Coloca el icono y el texto en una fila horizontal
    alignItems: 'center', // Centra verticalmente los elementos
    backgroundColor: '#D0BFFF', // Color de fondo de la vista
    padding: 15, // Espaciado alrededor de la vista
    borderRadius: 10, // Bordes redondeados para la vista
    marginBottom: 10, // Espacio inferior entre pares de iconos y textos
    width: '80%', // Ancho de la vista (ajusta según tus necesidades)
    
  },
  
  textoinf:{
    fontSize: 22,
  },
  
  iconText:{
    fontWeight: 'bold', // Peso de la fuente
    fontSize: 22, // Tamaño de la fuente
    marginLeft: 10,
  },
  footer:{
    flex:1.5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#DFCCFB'
  },

  
  image:{
    width:200,
    height:200,
    borderRadius:300,

  },
  contenedor:{
    flex: 1,
    backgroundColor:'#DFCCFB'
  },

  texto:{
    color: 'red',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 28
  },

  
  textName: {
    fontWeight: 'bold', // Peso de la fuente
    fontSize: 27, // Tamaño de la fuente
    marginTop: 10, // Espacio superior para separarlo de la imagen
  },

  iconContainer: {
    flex:2,
    flexDirection: 'row', // Alinea los iconos en una fila horizontal
    alignItems: 'center', // Centra verticalmente los iconos
    backgroundColor: '#DFCCFB',
    justifyContent: 'space-evenly',
    
  },
})

export default App

