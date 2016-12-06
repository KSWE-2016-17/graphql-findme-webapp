import React from "react";

import ProfilAnsichtNavigationElement from "../components/ProfilAnsichtNavigationElement";
import ProfilAnsichtRowHead from "../components/ProfilAnsichtRowHead";
import ProfilAnsichtRowBilder from "../components/ProfilAnsichtRowBilder";
import ProfilAnsichtRowInteressen from "../components/ProfilAnsichtRowInteressen";

export default class ProfilViewComponent extends React.Component {
    render() {
        return (
            <div>
                <ProfilAnsichtNavigationElement/>
                <ProfilAnsichtRowHead/>
                <hr/>
                <ProfilAnsichtRowBilder/>
                <hr/>
                <ProfilAnsichtRowInteressen/>
            </div>
        );
    }
}
