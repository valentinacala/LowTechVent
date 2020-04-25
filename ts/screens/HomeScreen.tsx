import { Text } from 'native-base'
import * as React from "react";
import BaseScreenComponent from "../utils/components/BaseScreenComponent";
import { Spacer } from "../utils/components/Spacer";
import { useNavigation } from "@react-navigation/native";

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