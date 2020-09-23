import React from 'react';

export default class Table extends React.Component {   
    render() {
        return (
        <tbody> 
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.newCases}</td>
                <td>{this.props.critical}</td>
                <td>{this.props.active}</td>
                <td>{this.props.recovered}</td>
                <td>{this.props.new}</td>
                <td>{this.props.deathTotal}</td>
                <td>{this.props.casesTotal}</td>
                <td>{this.props.testTotal}</td>
            </tr>
        </tbody>
        )
    }
}
