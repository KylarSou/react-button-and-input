import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Image
      resizeMode="cover"
      style={{
        width: "100%",
        height: 180,
        borderWidth: 2,
        borderColor: "red",
      }}
      source={{
        uri: "https://www.insightvacations.com/media/2iymomqq/sweden-guided-tours-travel-guide.jpg"
      }}
      />
    </View>
  );
};
  
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;