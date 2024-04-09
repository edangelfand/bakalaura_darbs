import React, { Component } from "react";
import Item from "./item";

export class Items extends Component {
    render() {
        return (
            <>
                <main>
                    {this.props.items.map(element => (
                        <Item key={element.id} itemIsOpened={this.props.itemIsOpened}
                        item={element} withAdding={this.props.withAdding} />
                    ))}
                </main>
            </>
        );
    }
}

export default Items
