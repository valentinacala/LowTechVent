import { Text, View } from 'native-base'
import * as React from "react";
import BaseScreenComponent from "../utils/components/BaseScreenComponent";
import { Spacer } from "../utils/components/Spacer";
import { useNavigation } from "@react-navigation/native";
import Indicator from '../utils/components/Indicator';




function HomeScreen() {
    const navigation = useNavigation();

    return(
        <BaseScreenComponent>
                <Indicator initialValue={50} finalValue={100} delta={0.2}/>
                <Spacer large={true}/>
                <Indicator/>

        </BaseScreenComponent>
    );
}

export default  HomeScreen;