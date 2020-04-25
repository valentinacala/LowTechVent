import { commonStyles } from "../commonStyles"
import React from "react"
import { View } from "native-base"

type Props = Readonly<{
    large?: boolean
}>

export const Spacer = (props: Props) => {

    const style = props.large ? commonStyles.xlSpacer : commonStyles.spacer

    return (
        <View style={style}/>
    )
}