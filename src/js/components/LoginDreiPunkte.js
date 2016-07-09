import React from "react";

export default class LoginDreiPunkte extends React.Component {
    getDescription(){
        return "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor " +
            "mauris condimentum nibh, ut fermentum massa justo sit amet risus." +
            "Etiam porta sem malesuada magna mollis euismod. Donec sed" +
            "odio dui.";
    }

    createContent() {
        return <div>
            <div className="row">
                <div className="col-md-4">
                    <h3 className="title">Interessen</h3>
                    <p className="para">{this.getDescription()}</p>

                    <button type="button" className="btn btn-primary">mehr Erfahren</button>
                </div>
                <div className="col-md-4">
                    <h3 className="title">Vorlieben</h3>
                    <p className="para">{this.getDescription()}</p>

                    <button type="button" className="btn btn-primary">mehr Erfahren</button>
                </div>
                <div className="col-md-4">
                    <h3 className="title">Vorstellungen</h3>
                    <p className="para">{this.getDescription()}</p>

                    <button type="button" className="btn btn-primary">mehr Erfahren</button>
                </div>
            </div>
        </div>;
    }

    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }
}
