import React from "react";

export default class Login extends React.Component {

    createNavigation() {
        return (
            <div className="container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <p className="navbar-text">find.me</p>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }

    createContent() {
        return (

            <div className="container">

                <div className="row"  style={{backgroundColor: "LightGray"}}>
                    <div className="col-md-1">
                        <h3 className="title">find.me</h3>
                    </div>
                    <div className="col-md-3 col-md-offset-8">

                            <form className="form-inline">
                                <div className="input-group">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="email"
                                               placeholder="Email">
                                        </input>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" className="form-control" id="password"
                                               placeholder="Password">
                                        </input>
                                    </div>
                                    <button type="submit" className="btn btn-primary">anmelden</button>
                                </div>
                            </form>

                    </div>


                </div>
                <div className="row" style={{backgroundColor: "#F7F7F7"}}>

                    <div className="col-md-12">

                        <h1 className="title">find.me</h1>
                        <h5 className="info">Anhand Ihrer Interessen, Vorlieben und Vorstellungen
                            erstellt find.me
                            <br/>eine Liste mit vielversprechenden Dates.
                            <br/>
                            <br/>
                            <br/>
                            Finden Sie den Richtigen.</h5>

                        <button type="button" className="btn btn-primary">Registrieren</button>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                </div>


                <div className="row">
                    <div className="col-md-4">
                        <h3 className="title">Interessen</h3>
                        <p className="para">Donec id elit non mi porta gravida
                            at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            Etiam porta sem malesuada magna mollis euismod. Donec sed
                            odio dui.</p>

                        <button type="button" className="btn btn-primary">mehr Erfahren</button>
                    </div>
                    <div className="col-md-4">
                        <h3 className="title">Vorlieben</h3>
                        <p className="para">Donec id elit non mi porta gravida
                            at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            Etiam porta sem malesuada magna mollis euismod. Donec sed
                            odio dui.</p>

                        <button type="button" className="btn btn-primary">mehr Erfahren</button>
                    </div>
                    <div className="col-md-4">
                        <h3 className="title">Vorstellungen</h3>
                        <p className="para">Donec id elit non mi porta gravida
                            at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            Etiam porta sem malesuada magna mollis euismod. Donec sed
                            odio dui.</p>

                        <button type="button" className="btn btn-primary">mehr Erfahren</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr  style={{border: "100px red"}}></hr>
                    </div>
                </div>
                <div className="row">
                    <div style={{border:"1px solid"}}></div>
                    <div className="col-md-12">
                        <h5>@find.me 2015</h5>
                    </div>
                </div>

            </div>

        )
    }

    render() {
        return (
            this.createContent()
        );
    }
}