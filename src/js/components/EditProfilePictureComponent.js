import React from "react";
import Image from "./DefaultImage";

export default class EditProfilePictureComponent extends React.Component {


    createContent() {
        return <div>
            <br/>
            <div>
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <form>
                            <table class="table" style={{width: "100%"}}>
                                <tr>
                                    <font size="4">Placeholder</font>
                                </tr>
                                <tr>
                                    <td>

                                        <input type="text" className="form-control" id="exampleInputEmail1" style={{width:"100%"}}
                                               placeholder="Breit gebaut, braun gebrannt, 100 Kilo Hantelbank">
                                        </input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <br/>
                                        <button type="submit" className="btn btn-primary">Speichern</button>
                                    </td>
                                </tr>

                            </table>
                        </form>
                    </div>
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