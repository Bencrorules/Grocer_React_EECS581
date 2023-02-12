import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Item from './components/Item'
import React, {useState} from 'react';

export default function App() {
  const [PantryItem, setItem] = useState();
  const [itemList, setItemList] = useState([]);
  const handleAddItem = () => {
    Keyboard.dismiss();
    setItemList([...itemList, PantryItem])
    setItem(null);
  }
  const deleteItem = (index) => {
    let itemsCopy = [...itemList];
    itemsCopy.splice(index, 1);
    setItemList(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/*Pantry Items*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          Pantry Items
        </Text>
        <View style={styles.items}>
          {/*Pantry Item List*/}
          {
            itemList.map((PantryItem, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => deleteItem(index)}>
                  <Item text={PantryItem} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>
      {/*Create new Entry for Pantry*/}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Insert Pantry Item'} value={PantryItem} onChangeText={text => setItem(PantryItem)}/>
        <TouchableOpacity onPress={() => handleAddItem()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold',
},
items: {
  marginTop: 30
},
writeTaskWrapper: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: "space-around",
  alignItems: 'center' 
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#fff',
  borderRadius: 60,
  borderColor: "#C0C0C0",
  borderWidth: 1,
  width: 250,
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#fff',
  borderRadius: 60, 
  justifyContent: "center",
  alignItems: 'center',
  borderColor: "#C0C0C0",
  borderWidth: 1,

},
addText: {},
          
});
