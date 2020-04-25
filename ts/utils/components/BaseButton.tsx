import { commonStyles } from "../commonStyles"
import React from "react"
import { Button, Text } from "native-base"

type Props = Readonly<{
    title: string,
    onPress: () => void
}>;

export const BaseButton = (props: Props) => {
    return (
    <Button onPress={props.onPress} style={commonStyles.button}>
        <Text>{props.title}</Text>
    </Button>
    )
}