import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚠️ Aplicación en mantenimiento</Text>

      <Text style={styles.message}>
        Estamos realizando mejoras para brindarte un mejor servicio.
      </Text>

      <Text style={styles.message}>
        Intenta ingresar nuevamente más tarde.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D32F2F",
    marginBottom: 20,
    textAlign: "center",
  },

  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    color: "#424242",
  },
});