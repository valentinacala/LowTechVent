import React from "react";
import { Text } from "native-base";
import { Animated, Easing } from "react-native";
import { BaseButton } from "./BaseButton";
import { Spacer } from "./Spacer";
import { commonStyles } from "../commonStyles";

type Props = Readonly<{
    duration: number; // milliseconds
}>;

type State = Readonly<{
    animValue: number;
    isAnimated: boolean;
}>;

export default class SignalGenerator extends React.PureComponent<Props,State>{
    private animatedValue = new Animated.Value(0);
    constructor(props: Props){
        super(props);
        this.state = {
            animValue: 0,
            isAnimated: false
        }
    }

    private increase = Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: this.props.duration/2,
        useNativeDriver: true,
        easing: Easing.sin
      })

    private decrease = Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: this.props.duration/2,
        useNativeDriver: true,
        easing: Easing.sin
      });

    private loop = Animated.loop(Animated.sequence([this.increase, this.decrease]));

    private startAnimation = () => {
        this.setState({isAnimated: true});
        this.loop = Animated.loop( Animated.sequence([this.increase, this.decrease]));
        this.loop.start();
    }

    private stopAnimation = () => {
        this.setState({isAnimated: false})
        this.loop.stop();
    }

    public componentDidMount() {
        this.animatedValue.addListener(({value}) => this.setState({animValue: value}))
        
    }

    public componentDidUpdate(_: Props, prevState: State) {
        if(this.state.animValue !== prevState.animValue && this.state.animValue === 1) {
        }
    }

    public componentWillUnmount(){
        this.animatedValue.removeAllListeners();
    }


    public render(){
        return(

            <React.Fragment>
                <Spacer/>
                <Spacer/>
                <Text style={commonStyles.header}>Signal Generator</Text>
                <Spacer/>
                <BaseButton title={this.state.animValue === 0 ?'start' : 'resume'} onPress={this.startAnimation} disabled={this.state.isAnimated}/>
                <Spacer/>
                <BaseButton title={'stop'} onPress={this.stopAnimation} disabled={!this.state.isAnimated}/>
                <Spacer/>
                <Text>Current value: {this.state.animValue}</Text>
                <Spacer/>
                <Spacer/>
            </React.Fragment>
        );
    }
}