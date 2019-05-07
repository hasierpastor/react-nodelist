import React, { Component } from 'react';
import { Table } from 'reactstrap';
import CustomButton from './CustomButton';
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapObject } from './Utils/mapObject';
import { sortObjectAscending, sortObjectDescending } from './Utils/sortObject';

let sortedObject;

//CSS style for table, list and collapsible component
const tableStyle = {
  margin: '0 auto',
  width: '500px'
};

const listStyle = {
  listStyleType: 'none',
  marginRight: '8rem',
  textAlign: 'right'
};

const collapsibleStyle = {
  cursor: 'pointer'
};

//Component that will render table and custom button components
class TreeTable extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleSort: false };
  }

  //Function that calls sortObjectAscending to sort node object
  //Change state to re-render node table
  sortAscending = () => {
    sortedObject = sortObjectAscending(this.props.nodes);
    this.setState({ toggleSort: !this.state.toggleSort });
    return sortedObject;
  };

  //Function that calls sortObjectAscending to sort node object
  //Change state to re-render node table
  sortDescending = () => {
    sortedObject = sortObjectDescending(this.props.nodes);
    this.setState({ toggleSort: !this.state.toggleSort });
    return sortedObject;
  };

  render() {
    //If nodes have been sorted then set node variable to sorted nodes, otherwise nodes is equal to randomized nodes passed down as props
    let nodes = sortedObject ? sortedObject : this.props.nodes;
    //Create table body => loop through node object and create rows/cells
    //Used react-collapsible component to create collapsible row that will display parent node children
    let tableBody = mapObject(nodes, (parentNode, childrenNodes, index) => {
      return (
        <tr style={collapsibleStyle} key={index}>
          <td key={index}>
            <Collapsible trigger={parentNode}>
              {mapObject(
                //call mapObject again to loop through parentNode children and display in table as a collapsible list
                childrenNodes,
                (childrenNode, childrenValue, index) => {
                  return (
                    <li key={index} style={listStyle}>
                      {childrenNode}
                    </li>
                  );
                }
              )}
            </Collapsible>
          </td>
        </tr>
      );
    });

    //Pass sortAscending and sortAscending functions to "dummy" buttons as props
    return (
      <div>
        <CustomButton
          handleClick={this.sortAscending}
          text={`Sort Nodes Ascending`}
        />
        <CustomButton
          handleClick={this.sortDescending}
          text={`Sort Nodes Descending`}
        />
        <Table style={tableStyle} dark bordered>
          <thead>
            <tr>
              <th>Node</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </Table>
      </div>
    );
  }
}

export default TreeTable;
