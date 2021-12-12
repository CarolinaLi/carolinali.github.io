import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import arrowForward from '../images/arrow-forward.svg'
import '../css/Global.css';
import '../css/Tile.css';

export default class TileComponent extends Component {
  render() {
    return (
      <div className="container">
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
              <img
                    className="button-arrow"
                    src={require('../images/' + this.props.buttonIcon)}
                    alt="go to project"
                  />
            </Button>
          </Card.Body>
        </Card>
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
  buttonIcon: PropTypes.string,
};
