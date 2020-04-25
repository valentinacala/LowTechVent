import { Dimensions } from "react-native";
import { Spacer } from "./Spacer";
import React from "react";
import { View, Text } from "native-base";
import { BaseButton } from "./BaseButton";
import * as Progress from 'react-native-progress';
import { commonStyles } from "../commonStyles";

type Props = Readonly<{
    initialValue?: number;
    finalValue?: number;
    unit?: string;
    delta?: number;
    title?: string
}>;


export default function Indicator (props: Props){

    


    const initial = props.initialValue || 0;
    const final = props.finalValue || 10;
    const desiredDelta = props.delta || 1;

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

    const getProgressValue = () => {

        return (progressSize-initial)/(final-initial)
    }

    return(
        <React.Fragment>
                <Text style={commonStyles.header}>{props.title || 'Indicator'}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>{initial}</Text>
                    <Text>{final}</Text>
                </View>
                <Spacer/>
                <Progress.Bar progress={getProgressValue()} width={windowWidth-24} />
                <Spacer/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <BaseButton title={`-${desiredDelta}`} onPress={reduceValue} disabled={progressSize === initial}/>
                    <View style={{flexDirection: 'column'}}>
                        <Text>Selected value:</Text>
                        <Text style={{textAlign: 'center'}}>{`${progressSize}${props.unit || ''}`}</Text>
                    </View>
                    
                    <BaseButton title={`+${desiredDelta}`} onPress={increaseValue} disabled={progressSize === final}/>
                </View>
        </React.Fragment>
    )
}