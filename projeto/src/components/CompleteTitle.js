import { Component } from "react";
import PrincipalTitle from "./PrincipalTitle";
import SecondTitle from "./SecondTitle";


//usando a composição de componentes
class CompleteTitle extends Component {
    render() {
        return (
            <PrincipalTitle>
                <SecondTitle/>
            </PrincipalTitle>
        )
    }
}

export default CompleteTitle;