import React from "react";

export default class DefaultImageComponent extends React.Component {
    render() {
        return (
            <div>{this.createDefaultImage()}</div>
        );
    }

    createDefaultImage() {
        return (
            <img
                src={'http://www.billiardimports.com.au/sites/default/files/imagecache/product_shop/imagefield_default_images/default-no-image_13.png'}
                alt="default" width="140px" height="140px" className="img-thumbnail" id="pic"/>
        );
    }
}
