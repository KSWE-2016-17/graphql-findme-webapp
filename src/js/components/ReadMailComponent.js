import React from "react";

export default class ReadMailComponent extends React.Component {
    render() {
        return (
            <div>{this.createContent()}</div>
        );
    }

    createContent() {
        return (
            <div>
                <div name="NEWMAIL">
                    <br/>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <table className="table" style={{width: "100%", border: "1px solid lightgrey"}}>
                                <tr>
                                    <td colspan="2" style={{backgroundColor: "lightgrey", border: "1px solid"}}>
                                        <font>Sarah Wittenstein</font>
                                    </td>
                                </tr>
                                <tr colspan="2">
                                    <td>
                                        <textarea name="Text1" rows="15" style={{
                                            width: "100%", border: "2px solid lightblue"
                                        }}>

                                            Bbbccccccccccdddddddddddddddddddddeeeeeeeeeeeeeeeeeefffffffffffffffffffff
                                            gggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiii
                                            jjjjjjjjjjjjjjjjjjjjjjjjkkkklmnopqqqqqqqqqrsssssssssssstttttttuuuuuvvvvvv
                                            wwwwwwwwwwwwwwxyz
                                             Bbbccccccccccdddddddddddddddddddddeeeeeeeeeeeeeeeeeefffffffffffffffffffff
                                            gggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiii
                                            jjjjjjjjjjjjjjjjjjjjjjjjkkkklmnopqqqqqqqqqrsssssssssssstttttttuuuuuvvvvvv
                                            wwwwwwwwwwwwwwxyz
                                             Bbbccccccccccdddddddddddddddddddddeeeeeeeeeeeeeeeeeefffffffffffffffffffff
                                            gggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiii
                                            jjjjjjjjjjjjjjjjjjjjjjjjkkkklmnopqqqqqqqqqrsssssssssssstttttttuuuuuvvvvvv
                                            wwwwwwwwwwwwwwxyz
                                        </textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <button className="btn btn-warning btn-md" type="button"><span
                                                className="glyphicon glyphicon-floppy-disk"></span> Archivieren
                                            </button>
                                        </div>
                                        <div className="col-md-1">
                                            <button className="btn btn-danger btn-md" type="button"><span
                                                className="glyphicon glyphicon-trash"></span> Löschen
                                            </button>
                                        </div>
                                    </div>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
