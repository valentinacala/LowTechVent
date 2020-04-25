import { Container, Content } from "native-base"
import { commonStyles } from "../commonStyles"
import React from "react"


export default class BaseScreenComponent extends React.PureComponent<{}>{
    public render(){
        return (
        <Container style={commonStyles.container}>
            <Content style={commonStyles.content}>
                {this.props.children}
            </Content>
        </Container>
        )
    }
}