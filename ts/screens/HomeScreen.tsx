import { View, Image, StyleSheet } from "react-native";
import { Button, Text, Content, Container } from 'native-base'
import * as React from "react";
import { commonStyles } from "../utils/commonStyles";
import BaseScreenComponent from "../utils/components/ BaseScreenComponent";
import { Spacer } from "../utils/components/Spacer";
import { BaseButton } from "../utils/components/BaseButton";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../utils/navigationRoutes";

function HomeScreen() {
    const navigation = useNavigation();

    return(
        <BaseScreenComponent>
                <Spacer/>
                <Text>Hello world!</Text>
                <Spacer/>
        </BaseScreenComponent>
    );
}

export default  HomeScreen;