import React from "react";

export default class TeaserComponent extends React.Component {
    render() {
        let self = this;

        return (
            <div>
                <h3>{self.props.header}</h3>
                <p>{self.props.description}</p>
                {(() => {
                    if (self.props.destination) {
                        return (
                            <a className="btn btn-link" href={self.props.destination}>mehr ...</a>
                        );
                    }
                })()}
            </div>
        );
    }
}
