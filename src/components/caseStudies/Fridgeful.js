import React, { Component } from 'react';
import '../../css/Global.css';
import '../../css/CaseStudy.css';

export default class FridgefulComponent extends Component {
  render() {
    return (
      <>
        <h1 className="block">Fridgeful</h1>
        <h2 className="light">Shopify Design Challenge</h2>
        <img
          className="block big-picture"
          src={require('../../images/FridgefulHeader.png')}
          alt="phone UI"
        />
        <p className="paragraph">
          As a part of the Shopify application process, I had to build an
          experience that solves the food waste problem. I’ll take you through
          the whole process of how I made the app, from inception to the high
          fidelity mockups.
        </p>
        <div className="paragraph">
          <h3>THE PROMPT</h3>
          <p className="light italic">
            “Food waste happens in many walks of life, in large quantities from
            big restaurants, to single homes not keeping leftovers; food waste
            is all around us. The effects of food waste are catastrophic and
            effect millions of people. There are efforts being done to combat
            food waste, but more can be done.
            <br />
            <br />
            Your challenge is to build an experience that helps people be more
            conscious about food waste. See it as an opportunity to experiment
            and explore different angles.”
          </p>
        </div>
        <div className="paragraph">
          <h3>RESEARCH</h3>
          <img
            className="big-picture"
            src={require('../../images/FridgefulNotes.png')}
            alt="brainstorming notes"
          />
          <p className="block">
            I started by jotting down my ideas and assumptions about the issue
            and asking, “Why are people wasting food?” I did some competitor
            research to see how others were tackling the problem, taking notes
            on what can be improved.
            <br />
            <br />
            Food waste happens on many levels, from production to distribution
            to retail. In Canada, up to 40% of food is wasted, resulting in a
            $31 billion loss each year. There are already several apps on the
            market focusing on preventing loss at the retail level, like YWaste.
            I wanted to design for another market: the individual user.
            <br />
            <br />
            Before we start designing, we need to find the underlying problem of
            why people are wasting food.
          </p>
        </div>
        <div className="paragraph">
          <h3>THE PROBLEM</h3>
          <p>
            People are buying more food than they can eat. Fruits and veggies
            are most commonly thrown away — things that expire quickly. No one
            wants to waste food, but people get busy and forget what’s in their
            fridge.
            <br />
            <br />
            Additionally, there’s a misconception that eating old food will make
            you sick, so people will discard perfectly edible food. Consumers
            and grocery stores alike are confused about what best-before,
            use-by, and sell-by dates really mean.
          </p>
        </div>
      </>
    );
  }
}
