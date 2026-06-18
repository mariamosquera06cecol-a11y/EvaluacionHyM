import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerDeportes();
  }, []);

  const obtenerDeportes = async () => {
    try {
      const response = await fetch(
        "https://www.thesportsdb.com/api/v1/json/3/all_sports.php"
      );

      const data = await response.json();
      setSports(data.sports);
    } catch (error) {
      console.log("Error al consumir la API:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#1E88E5" />
        <Text>Cargando deportes...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>🏆 Lista de Deportes</Text>

      <FlatList
        data={sports}
        keyExtractor={(item) => item.idSport}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.strSportThumb }}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.strSport}</Text>
              <Text style={styles.format}>{item.strFormat}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#1565C0",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
    alignItems: "center",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },

  format: {
    fontSize: 15,
    color: "#666",
    marginTop: 5,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
