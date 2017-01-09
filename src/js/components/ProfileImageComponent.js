import React from "react";

import ImageComponent from "./ImageComponent";

export default class ProfileImageComponent extends ImageComponent {
    constructor(props) {
        super(props);

        this.state = {
            src: "https://b.thumbs.redditmedia.com/GVc0WVhrmqvIQyMolx763ItKqJ0krwqZLOw7nlg03uY.jpg"
        };
    }
}
