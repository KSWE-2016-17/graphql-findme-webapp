import React from "react";

export default class DefaultProfilImageComponent extends React.Component {

    createDefaultProfilImage() {
        return <img src={'https://b.thumbs.redditmedia.com/GVc0WVhrmqvIQyMolx763ItKqJ0krwqZLOw7nlg03uY.jpg'}
                    alt="default" width="140px" height="140px" className="img-thumbnail" id="pic"/>;
    }

    render() {
        return (
            <div>{this.createDefaultProfilImage()}</div>
        );
    }
}
