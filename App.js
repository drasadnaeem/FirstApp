import React from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  Button,
  Alert,
  SafeAreaView,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import AppText from "./app/config/AppText";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    // <WelcomeScreen/>
    <ViewImageScreen />
    //<AppButton />
    //<ListingDetailsScreen />
  );
}
