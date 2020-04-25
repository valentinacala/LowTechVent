import { Dimensions, StyleSheet } from "react-native";
import { Spacer } from "./Spacer";
import React from "react";
import { View, Text } from "native-base";
import { BaseButton } from "./BaseButton";
import * as Progress from 'react-native-progress';
import { commonStyles } from "../commonStyles";

type Props = Readonly<{
    initialValue?: number;
    initialLabel?: string;
    finalValue?: number;
    finalLabel?: string;
    unit?: string;
    delta?: number;
    valueLabel?: string;
    title?: string
}>;

export default function Indicator (props: Props){
    const initial = props.initialValue ? props.initialValue * 100 : 0;
    const final = props.finalValue ? props.finalValue * 100 : 1000;
    const desiredDelta = props.delta ?  props.delta * 100 : 100;

    const[progressSize, setProgressSize] = React.useState(initial);

    const size = Dimensions.get('window');
    const windowWidth = size.width;

    const reduceValue = () => {
        if(progressSize === initial){
            return null;
        }
        setProgressSize(progressSize - desiredDelta)
    }

    const increaseValue = () => {
        if(progressSize === final){
            return null;
        }
        setProgressSize(progressSize + desiredDelta)
    }

    const progressValue = (progressSize-initial)/(final-initial)

    return(
        <View style={{padding: 4, backgroundColor: '#E1FFEB', marginTop: 16, paddingVertical: 16}}>
                
                <Text style={commonStyles.header}>{props.title || 'Indicator'}</Text>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>{props.initialLabel || initial/100}</Text>
                    <Text>{props.finalLabel || final/100}</Text>
                </View>
                
                <Spacer/>
                
                <Progress.Bar progress={progressValue} width={windowWidth-32-8} />
                
                <Spacer/>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    
                    <BaseButton title={`-${props.valueLabel || ''}${props.delta || 1}`} onPress={reduceValue} disabled={progressSize === initial}/>
                    
                    <View style={{flexDirection: 'column'}}>
                        <Text>Selected value:</Text>
                        <Text style={{textAlign: 'center'}}>{`${props.valueLabel || ''}${progressSize/100} ${props.unit || ''}`}</Text>
                    </View>
                    
                    <BaseButton title={`+${props.valueLabel || ''}${props.delta || 1}`} onPress={increaseValue} disabled={progressSize === final}/>
                </View>
        </View>
    )
}