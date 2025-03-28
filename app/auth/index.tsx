import AuthButton from "@/components/AuthButton";
import AuthLink from "@/components/AuthLink";
import { PurpleView } from "@/components/PurpleView";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ marginTop: "20%", fontWeight: "bold", color: "#7C7A87" }}>
        Let's Get Started
      </Text>
      <Image
        source={require("@/assets/images/auth-home.png")}
        contentFit="contain"
        style={{ width: 289, height: 253, marginVertical: 20 }}
      />
      {/* <View style={{ marginTop: 24 }}> */}
      <>
        <View style={{ marginTop: 24 }}></View>
        <AuthButton name={"Google"} icon={<Ionicons name="logo-google" />} />
        <AuthButton
          name={"Facebook"}
          icon={<MaterialIcons name="facebook" />}
        />
      </>
      {/* </View> */}
      <View
        style={{
          marginTop: 135,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <AuthLink title={"Sign Up"} href={"/auth/signup"} />
        <AuthLink title={"Login"} href={"/auth/login"} />
      </View>
    </SafeAreaView>
  );
}
