import React from "react";
import ReactDOM from "react-dom";

//import HelloWorldComponent from "./components/HelloWorldComponent";

import ProfilViewComponents from "./pages/ProfilViewComponent";

var Main = function () {
    return <div>
        <ProfilViewComponents />
    </div>

}

ReactDOM.render(<Main />, document.getElementById('app'));