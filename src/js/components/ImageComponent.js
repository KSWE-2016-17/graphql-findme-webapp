import React from "react";

export default class ImageComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: "http://www.billiardimports.com.au/sites/default/files/imagecache/product_shop/imagefield_default_images/default-no-image_13.png"
        };
    }

    render() {
        return (
            <img className="img-thumbnail" src={this.state.src} style={{
                width: "140px",
                height: "140px"
            }}
            />
        );
    }

    componentDidMount() {
        if (this.props.src) {
            this.setState({src: this.props.src});
        }
    }
}
