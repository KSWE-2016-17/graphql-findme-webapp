import React from "react";

import PS from "../services/PictureService";

export default class DefaultProfilImageComponent extends React.Component {

    createDefaultProfilImage() {
        // let ps = new PS();
        //
        //
        // ps.findProfileByUserId(localStorage.getItem("sessionUserId"))
        //     .then(function(data){
        //         ///
        //         //
        //         ps.getPictureData(localStorage.getItem("sessionProfileId"))
        //             .then(function(data){
        //                 let url = "http://elbe203.startdedicated.de:15984/findme/";
        //
        //                 console.log("BILD");
        //                 console.log(data[0]._id);
        //                 console.log(data[0]);
        //
        //                 url = url + data[0]._id + "/";
        //
        //                 for(let x in data[0]._attachments){
        //                     console.log(x);
        //                     let foo = data[0]._attachments[x];
        //                     console.log(foo);
        //                     url = url + x;
        //                     break;
        //                 }
        //
        //                 console.log("URL FOLGT");
        //
        //
        //                 console.log(url);
        //
        //                 $("#pic").attr("src",url);
        //
        //
        //             })
        //             .catch(function(err){
        //                 console.log(err);
        //             });
        //         //
        //         ///
        //     })
        //     .catch(function(err){
        //         console.log(err);
        //     });

        return <img src={'https://b.thumbs.redditmedia.com/GVc0WVhrmqvIQyMolx763ItKqJ0krwqZLOw7nlg03uY.jpg'}
                    alt="default" width="140px" height="140px" className="img-thumbnail" id="pic"/>;
    }

    render() {
        return (
            <div>{this.createDefaultProfilImage()}</div>
        );
    }
}
