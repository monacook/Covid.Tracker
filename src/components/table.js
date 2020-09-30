import React from 'react';
import { Tbody, Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default class Tables extends React.Component {   
    render() {
        return (
        <Tbody> 
            <Tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.newCases}</Td>
                <Td>{this.props.critical}</Td>
                <Td>{this.props.active}</Td>
                <Td>{this.props.recovered}</Td>
                <Td>{this.props.new}</Td>
                <Td>{this.props.deathTotal}</Td>
                <Td>{this.props.casesTotal}</Td>
                <Td>{this.props.testTotal}</Td>
            </Tr>
        </Tbody> 
        )
    }
}