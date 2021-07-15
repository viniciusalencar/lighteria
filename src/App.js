import React from 'react';
import { Image, SafeAreaView, View, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <View style={styles.containerBag}>
          <Image source={require('./assets/images/icone-sacola.png')} style={styles.image} />
        </View>
      </View>
      <View style={styles.containerDescription}>
        <View style={styles.separator}></View>
        <View style={styles.containerText}>
          <Text style={styles.textDescription}>Descrição</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4'
  },
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  titulo: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 18
  },
  containerBag: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 30,
  },
  image: {
    height: 30,
    width: 30
  },
  containerDescription: {
    paddingHorizontal: 24,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46
  },
  textDescription: {
    padding: 34,
    backgroundColor: '#F4F0F4',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#A1A5AA'
  }
})

export default App;