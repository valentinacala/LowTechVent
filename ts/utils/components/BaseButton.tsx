import { commonStyles } from "../commonStyles"
import React from "react"
import { Button, Text } from "native-base"
import { ButtonProps } from "react-native";

type Props = Readonly<{
    title: string,
    onPress: () => void
}>;

export const BaseButton = (props: Props & ButtonProps) => {

    const style = props.disabled ? commonStyles.buttonDisabled : commonStyles.button

    return (
    <Button onPress={props.onPress} style={style}>
        <Text>{props.title}</Text>
    </Button>
    )
}