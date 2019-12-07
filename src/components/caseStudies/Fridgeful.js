import React, { Component } from 'react';
import '../../css/Global.css';
import '../../css/CaseStudy.css';
import FooterComponent from '../FooterComponent';

export default class FridgefulComponent extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <h1 className="case-title block">Fridgeful</h1>
        <h2 className="case-subtitle light">UX Design Challenge</h2>
        <img
          className="block big-picture"
          src={require('../../images/FridgefulHeader.png')}
          alt="phone UI"
        />
        <p className="paragraph">
          As a part of a UX application process, I had to build an experience
          that solves the food waste problem. I’ll take you through the whole
          process of how I made the app, from inception to the high fidelity
          mockups.
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
        <div className="paragraph">
          <h3>THE SOLUTION</h3>
          <p>
            As I was coming up with ways to solve these problems, I made sure to
            not lose our overall mission: Stop people from wasting food.
            <br />
            <br />
            This will be accomplished through three goals:
            <br />
            1. Don’t let people forget about the food they already have
            <br />
            2. Remove any misconceptions we have about “old food”
            <br />
            3. Provide a way to save extra food that can’t be finished
            <br />
            <br />
            Now that we know what we want to achieve, we can start designing!
          </p>
        </div>
        <div className="paragraph">
          <h3>WIREFRAMES</h3>
          <img
            className="big-picture"
            src={require('../../images/FridgefulWireframes.png')}
            alt="rough wireframes"
          />
          <p className="block">
            Since none of our goals depend on each other, I opted to split each
            into their own flow. I also wanted to add a ‘Stats’ section, so the
            user can track their progress and feel more accountable for their
            food.
            <br />
            <br />
            After going through several iterations on paper, I got the general
            ideas down and moved the designs to Sketch.
          </p>
          <img
            className="block big-picture"
            src={require('../../images/FridgefulSketchWF.png')}
            alt="detailed wireframes"
          />
          <p className="block">
            I chose to have navigation on the bottom since it works better with
            thumbs. As users move from left to right, they progress from the
            individual to the wider community.
            <br />
            <br />
            Notifications are vital for this app, since people need reminders
            that their food is expiring. The main reason why food goes into the
            garbage is because it’s forgotten, so having notifications does a
            lot to help goal #1.
            <br />
            <br />
            The other key part of the app is providing a way for people to save
            the extra food they know they can’t eat. This is where the community
            aspect comes into play—users can post food to their ‘market’, so
            other people nearby can pick it up for free. Similarly, they can
            browse for available food within a radius and message the host to
            arrange for pickup. People naturally love free food, and this helps
            bring together a community. When the app becomes part of the
            conversation, more and more users will be brought in.
            <br />
            <br />
            As for goal #2, the app has a ‘Learn’ section where users can find
            information on food and food safety. More on this later.
            <br />
            <br />
            Going into detail on some of the more important features:
          </p>
        </div>
        <div className="paragraph">
          <h3>HIGH FIDELITY</h3>
          <p>ADDING FOOD TO THE INVENTORY</p>
          <img
            className="big-picture"
            src={require('../../images/FridgefulAdd.png')}
            alt="mockup of adding food"
          />
          <p className="block">
            The inventory is where the user can check what they have in their
            fridge, freezer, or pantry. When people go shopping, they can make
            sure they’re not buying food they already have, which helps goal #1.
            <br />
            <br />
            Entering food into the inventory had to be as streamlined as
            possible, or no one would get past onboarding. Users have the option
            to scan their grocery receipt to bulk enter items, or enter each
            item manually. To speed things up, the app provides some default
            dates and quantities that the user can edit.
          </p>
          <p className="block">REMOVING FOOD FROM THE INVENTORY</p>
          <img
            className="big-picture"
            src={require('../../images/FridgefulRemove.png')}
            alt="mockup of removing food"
          />
          <p className="block">
            Here, the app sneakily convinces users to not waste food. If they
            choose to throw away food, the app prompts them to reconsider, and
            provides a link to an article from Learn with more information about
            when food truly expires. If it’s indeed no longer edible, users are
            encouraged to compost it rather than toss it in the garbage.
            <br />
            <br />
            The data is then saved and displayed in the user’s stats, so people
            can track how much of their food is wasted, consumed, or donated.
          </p>
          <p className="block">INTERACTING WITH THE COMMUNITY</p>
          <img
            className="big-picture"
            src={require('../../images/FridgefulCommunity.png')}
            alt="mockup of community section"
          />
          <p className="block">
            The Market view is split into two sections: the user’s items to give
            away are at the top, and items available for pickup are at the
            bottom. You can clearly see the expiration date for each product,
            and tapping would show any details, such as brand, weight, and
            messages. A quick swipe to the left would show all the
            conversations. Users can contact others, set up a time to meet, and
            save the food from being wasted, even if they can’t eat it
            themselves.
          </p>
        </div>
        <div className="paragraph">
          <h3>WRAPPING IT UP</h3>
          <img
            className="big-picture"
            src={require('../../images/FridgefulMockups.png')}
            alt="full user flow"
          />
          <p className="block">
            I used a lot of assumptions in my decision making, the biggest being
            that enough people would be willing to put in all the extra effort
            to save food and build the community. The next step would be
            validating these assumptions, doing user testing, and figuring out
            what needs to be tweaked.
            <br />
            <br />I hope this case study gave you an idea of how I tackle
            projects. Thanks for reading!
          </p>
        </div>
        <FooterComponent />
      </>
    );
  }
}
