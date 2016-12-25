import React from "react";

export default class TeaserComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.header}</h3>
                <p>{this.props.description}</p>
                {(() => {
                    if (this.props.destination) {
                        return (
                            <a className="btn btn-link" href={this.props.destination}>mehr ...</a>
                        );
                    }
                })()}
            </div>
        );
    }
}
