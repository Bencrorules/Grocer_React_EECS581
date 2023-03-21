import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Modal } from 'react-native';
import Ingredient from './Ingredient';
import React, {useState} from 'react';


const FindScreen = ({navigation}) => {
    const [ingredient, setIngredient] = useState();
    const [ingredientItems, setIngredientItems] = useState([]);
    const [isRender, setisRender] = useState(false);
    const [isModalVisible, setisModalVisible] = useState(false);
    const [inputText, setinputText] = useState();
    const [editItem, seteditItem] = useState();
    var entryIndex = '';

    const handleAddIngredient = () => {
        Keyboard.dismiss();
        setIngredientItems([...ingredientItems, ingredient])
        setIngredient(null);
    }

    const onPressSaveEdit = () => {
      //setinputText(entryIndex, text);
      setisModalVisible(false);
    }

    const onPressItem = (item) => {
      setisModalVisible(true);
      setinputText(item, text);
      seteditItem(item.id)
    }

    /* const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => onPressItem(item)}
        >
          <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
      )
    } */

    const completeIngredient = (index) => {
        entryIndex = index;
        setisModalVisible(true);
      
        /* let itemsCopy = [...ingredientItems];
        itemsCopy.splice(index, 1);
        setIngredientItems(itemsCopy) */
    }

    return (
        <View style={styles.container}>
          <Modal
            animationType='fade'
            visible={isModalVisible}
            onRequestClose={() => setisModalVisible(false)}
          >
            <View style = {styles.modalView}>
                <Text style = {styles.text}>Change Text: </Text>
                <TextInput 
                    style = {styles.textInput}
                    onChangeText={(text)=> entryIndex.text=text}
                    defaultValue={inputText}
                    editable={true}
                    multiline={false}
                    maxLength={200}
                />
                <TouchableOpacity
                    onPress={() => onPressSaveEdit()}
                    style={styles.touchableSave}
                >
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
            </View>
          </Modal>
        <ScrollView
            contentContainerStyle={{
            flexGrow: 1
            }}
            keyboardShouldPersistTaps='handled'
        >
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.sectionTitle}>Your Ingredients:</Text>
                <View style={styles.items}>
                {
                    ingredientItems.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}  onPress={() => completeIngredient(index)}>
                        <Ingredient text={item} /> 
                        </TouchableOpacity>
                    )
                    })
                }
                </View>
            </View>
        </ScrollView>

        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeIngredientWrapper}
        >
            <TextInput style={styles.input} placeholder={'Add an ingredient'} value={ingredient} onChangeText={text => setIngredient(text)} />
            <TouchableOpacity onPress={() => handleAddIngredient()}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        
        </View>
    );
};

export default FindScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    ingredientsWrapper: {
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
    writeIngredientWrapper: {
      position: 'absolute',
      bottom: 20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {},
  });
  