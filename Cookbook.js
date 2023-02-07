import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";

const DATA = [
  { id: "1", key: "Recipe1" },
  { id: "2", key: "Recipe2" },
  { id: "3", key: "Recipe3" },
  { id: "4", key: "Recipe4" },
  { id: "5", key: "Recipe5" },
  { id: "6", key: "Recipe6" },
  { id: "7", key: "Recipe7" },
  { id: "8", key: "Recipe8" },
];

const Cookbook = () => {
  const [modalInfo, setModalInfo] = useState(undefined);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setModalInfo(item.key)}>
      <Text style={styles.item}>{item.key}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={modalInfo != undefined}>
        <View style={styles.modalContainer}>
          <Text style={styles.item}>{modalInfo}</Text>
          <TouchableOpacity onPress={() => setModalInfo(undefined)}>
            <Text style={styles.item}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 22,
  },
  modalContainer: {
    //flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
    padding: 10,
    borderRadius: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Cookbook;
