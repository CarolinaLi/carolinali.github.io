import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../css/Global.css';
import '../css/Tile.css';

export default class TileComponent extends Component {
  render() {
    return (
      <div className="container">
        <NavLink
          to="/about"
        >
          <Card className="tile">
            <Card.Img
              className="tile-image"
              variant="top"
              src={require('../images/' + this.props.image)}
            />
            <Card.Body className="tile-body">
              <Card.Title className="tile-title">{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Button
                style={{ backgroundColor: '' + this.props.buttonColor }}
                className="tile-button"
              >
                {this.props.buttonText}
              </Button>
            </Card.Body>
          </Card>
        </NavLink>
      </div>
    );
  }
}

TileComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
};
