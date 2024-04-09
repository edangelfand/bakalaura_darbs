import React, { Component } from 'react'
import "./categories.style.css";

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    id: 'all',
                    name: 'Radīt visu'
                },
                {
                    id: 'phone',
                    name: 'Mobilie telefoni'
                },
                {
                    id: 'laptop',
                    name: 'Portatīvie datori'
                },
                {
                    id: 'headphones',
                    name: 'Austiņas'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(element => (
            <div key = {element.id} onClick={() => this.props.filterItems(element.id)}>
                {element.name}
            </div>
        ))}
      </div>
    )
  }
}

export default Categories