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
                <Indicator 
                    title={'Number of breathing'}
                    unit={'cycles/min'}
                    initialValue={10} 
                    finalValue={30} 
                    delta={1}
                />

                <Indicator
                    title={'PEEP'}
                    unit={'cmH2O'}
                    initialValue={5} 
                    finalValue={20} 
                    delta={0.5}
                />

                <Indicator
                    title={'inspiratory:expiratory ratio'}
                    initialValue={1}
                    initialLabel={'1:1'} 
                    finalValue={3} 
                    finalLabel={'1:3'}
                    delta={0.2}
                    valueLabel={'1:'}
                />

                {/**inspiratory pressure between 5 to 35 cmH2O */}
                <Indicator
                    title={'inspiratory pressure'}
                    unit={'cmH2O'}
                    initialValue={5} 
                    finalValue={35} 
                    delta={0.2}
                />          
        </BaseScreenComponent>
    );
}

export default  HomeScreen;