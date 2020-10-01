import React from 'react';
import { Tbody, Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { numberFormatting } from "../helpers/number";

export default class Tables extends React.Component {   
    render() {
        return (
        <Tbody> 
            <Tr>
                <Td>{this.props.name}</Td>
                <Td>{numberFormatting(this.props.newCases)}</Td>
                <Td>{numberFormatting(this.props.critical)}</Td>
                <Td>{numberFormatting(this.props.active)}</Td>
                <Td>{numberFormatting(this.props.recovered)}</Td>
                <Td>{numberFormatting(this.props.new)}</Td>
                <Td>{numberFormatting(this.props.deathTotal)}</Td>
                <Td>{numberFormatting(this.props.casesTotal)}</Td>
                <Td>{numberFormatting(this.props.testTotal)}</Td>
            </Tr>
        </Tbody> 
        )
    }
}