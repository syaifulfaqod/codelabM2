import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import PageButton from "@/components/PageButton";
import { pageStyles } from "@/styles";

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={pageStyles.container}>
      <Text style={pageStyles.title}>Page Explorer</Text>
      <Text style={pageStyles.description}>Latihan Expo Router dan Styling</Text>
      <PageButton
        title="Open Documentation"
        onPress={() => router.push("/docs")}
      />
      <PageButton
        title="Open Codelab 1 (useContext)"
        onPress={() => router.push("/codelab1")}
      />
      {/* INLINE STYLE */}
      <Text
        style={{
          textAlign: "center",
          color: "#999999",
          marginTop: 10,
        }}
      >
        Learn Expo Router
      </Text>
    </View>
  );
}
