import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import '../../css/Global.css';
import '../../css/CaseStudy.css';
import FooterComponent from '../FooterComponent';

export default class SlackComponent extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <Header />
        <div className="container-fluid container-hero">
          <img
            className="hero"
            src={require('../../images/slack-hero.png')}
            alt="desktop showing Slack sign in screen"
          />
        </div>
        <div className="container content">
          <h1 className="title case-study-title">
            Redesigning Slack’s sign in process
          </h1>
          <div className="container-md block">
            <h2 className="block-title">Overview</h2>
            <p className="center-with-margins">
              I had trouble signing in to Slack, and discovered that I wasn’t
              the only one. During my Summer 2020 internship, working on how to
              make signing in easier became my personal side project. The goal
              was to create an experience that removed any confusion, and with
              my manager’s guidance,{' '}
              <b>
                I created high fidelity designs that demonstrate how Slack’s
                sign in process can be smarter and more streamlined.
              </b>
            </p>
            <br></br>
            <div className="row center-with-margins">
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">TIMELINE</b>
                <p>May - Aug 2020</p>
              </div>
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">MY ROLE</b>
                <p>Research, wireframing, usability testing</p>
              </div>
              <div className="col-sm mb-4 pl-0">
                <b className="text-monospace">DELIVERABLES</b>
                <p>High fidelity flows, documentation</p>
              </div>
            </div>
          </div>
          <div className="block">
            <h2 className="block-title">
              Prologue: How this whole thing started
            </h2>
            <p className="center-with-margins">
              It was Spring 2020, and I had just joined a new workspace on the
              web app and wanted to sign in on my phone. I just couldn’t figure
              out how to do it! I hit dead ends everywhere and ended up deleting
              my account and asking my team to send another invite to the email
              I was using on my phone.
              <br />
              <br />
              It was an enormous hassle, and I thought it was just me. After
              conducting several interviews with other Slack users, I realized
              others were also unsatisfied with how sign in works.
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">The scope</h2>
            <p className="center-with-margins">
              Since this was going to be a one-person journey, I knew I had to
              scope down the project. I focused on a specific use case: a
              returning user who joins a new workspace on Slack’s web app. In
              other words, the user receives an email invitation at an address
              that they’ve used for Slack before, and joins via the invite
              button.
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">The problem</h2>
            <p className="center-with-margins">
              Currently, users must create a new account for every workspace,
              even if they’ve used Slack before. From user interviews, I learned
              that this is <b>confusing and frustrating.</b> People don’t
              understand why they must create a new account each time, and they
              don’t like managing multiple accounts.
            </p>
            <br></br>
            <img
              className="case-study-img"
              src={require('../../images/slack-problem.png')}
              alt="Slack's current flow makes users create a new account for each workspace"
            />
            <br></br>
            <br></br>
            <p className="center-with-margins">
              One Slack user said,{' '}
              <b>
                “For this email, I already used it for another Slack, so I don’t
                see why I have to create an account.”
              </b>
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">The solution</h2>
            <p className="center-with-margins">
              I focused on tackling the biggest hurdle: how can users sign in
              without creating a new account for each workspace?
            </p>
            <img
              className="case-study-img"
              src={require('../../images/slack-brainstorming.png')}
              alt="A collection of solution iteration sketches"
            />
            <br></br>
            <br></br>
            <p className="center-with-margins">
              I generated iterations upon iterations, tested when I needed
              feedback, and evaluated different possible solutions to create the
              final design below:
            </p>
            <br></br>
            <img
              className="case-study-img"
              src={require('../../images/slack-solution.png')}
              alt="The solution flow"
            />
            <p className="center-with-margins">
              <br></br>
              <br></br>
              Let’s break down each step.
              <br></br>
              <br></br>
              When the user clicks on the join button, they go into the sign in
              flow, where they can view their email address.{' '}
              <b>Users like to see their address confirmed,</b> and seeing what
              other workspaces they’ve used with this address helps them
              organize workspaces.
              <br></br>
              <br></br>
              Next, they have the opportunity to edit their name. People want to
              have control over how they display personal information, which can
              change depending on the workspace’s purpose and who’s in it.
              <br></br>
              <br></br>
              Finally, the user signs in by entering their password.{' '}
              <b>
                The key change here as that they don’t have to create and
                remember a new password.
              </b>{' '}
              From user interviews, I learned that people like to reuse accounts
              because it’s easier to manage.
              <br></br>
              <br></br>
              One potential drawback is that the user can’t set a more secure
              password for this workspace. It’s a trade-off between convenience
              and customization. My research shows that users don’t need
              different passwords, but if there’s a demand, then Slack could
              save this feature for power users. For example, they can allow
              users to change workspace passwords through settings.
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">Impact</h2>
            <p className="center-with-margins">
              At the start of the project, I conducted research to discover how
              others felt about the sign in process. At the end, I measured
              success by reinterviewing the same people and asking if the
              changes made a difference. I used the {' '}
              <a
                className="link text-link"
                href="https://www.netpromoter.com/know/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Net Promoter Score
              </a>
              {' in my interviews, asking: '}
              <br></br>
              <br></br>
              Would you recommend Slack to a friend or co-worker? 0 is not
              likely at all, and 10 is extremely likely.{' '}
              <b>Would this redesign make a difference in your rating?</b>
              <br></br>
              <br></br>I received the following feedback:
              <br></br>
              <br></br>
              “I’d give Slack a 7. This change makes a difference with my
              rating. One of the reasons I don’t like Slack if because the sign
              in process is terrible.{' '}
              <b>
                If this change is implemented, it would become a 9. I see myself
                using Slack more often if this existed.
              </b>
              ”
            </p>
            <img
              className="case-study-img"
              src={require('../../images/nps.png')}
              alt="In NPS, 0-6 are detractors, 7-8 are passive, and 9-10 are promoters"
            />
            <p className="text-monospace center-with-margins">
              <small>Source: www.netpromoter.com/know</small>
            </p>
            <br></br>
            <br></br>
            <p className="center-with-margins">
              This means the user would go from being passive (7) to becoming a
              promoter (9).
              <br></br>
              <br></br>
              While this is great news, depending on individual interviews for
              evaluating impact isn’t efficient in the real world. If I had the
              resources, I would measure success by comparing the sign in
              completion rate for before and after this change. I’d also measure
              the number of returning Slack users, and how many subsequent
              workspaces they join.
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">How I made my design decisions</h2>
            <p className="center-with-margins">
              <b>CHOOSING A PROBLEM</b>
              <br />
              <br />
              Rethinking mandatory account creation wasn’t the only way to
              improve the sign in process. After setting the scope, I mapped out
              the flow on two platforms: web and mobile.
              <br />
              <br />
            </p>
            <img
              className="case-study-img"
              src={require('../../images/slack-map.png')}
              alt="Original Slack sign in flow on web and mobile"
            />
            <br />
            <br />
            <p className="center-with-margins">
              Then I recruited five people, designed a study plan where they
              joined a workspace I had created, and asked them about their
              experience. I found six areas of improvement.
            </p>
            <br />
            <img
              className="case-study-img"
              src={require('../../images/slack-effort-value.png')}
              alt="An effort vs value chart ranks each area of improvement"
            />
            <br />
            <br />
            <p className="center-with-margins">
              For each area of improvement, I created a numerical representation
              for the development effort and how much value it would bring to
              users. I chose this problem because it has the greatest value to
              effort ratio.
            </p>
            <br />
            <br />
            <p className="center-with-margins">
              <b>DECIDING BETWEEN TWO POTENTIAL SOLUTIONS</b>
              <br />
              <br />
              After brainstorming and iterating, I ended up with two possible
              solutions, and had to make a choice.
              <br />
              <br />
              Idea 1 ensures that users will join workspaces with the{' '}
              <b>same</b> email address that they received the invite with.
              <br />
              <br />
              Idea 2 enables the user to sign in with <b>any</b> email address,
              as long as they’re using the link in the invite.
            </p>
            <img
              className="case-study-img"
              src={require('../../images/slack-two-solutions.png')}
              alt="Wireframes showing each idea"
            />
            <br />
            <br />
            <p className="center-with-margins">
              To decide between these two options, I wanted to find out which
              option made more sense to users. I set up a quick test using low
              fidelity wireframes, and asked,{' '}
              <b>
                how many emails do you want to associate with a Slack account?
              </b>{' '}
              If users want multiple emails linked to a single account, then
              Idea 2 would give them that flexibility.
            </p>
            <img
              className="case-study-img"
              src={require('../../images/slack-lofi-test.png')}
              alt="Low fidelity mockups of each idea"
            />
            <br />
            <br />
            <p className="center-with-margins">
              After interviewing three people, I learned that everyone wants the
              option to link multiple email addresses to one Slack account. Idea
              2 seems like the obvious choice. However, I still chose Idea 1 in
              the end, where users can only join with the address that received
              the invite.
              <br />
              <br />
              Here’s why — the reason everyone wants to link multiple emails is
              because they want to easily switch between different workspaces.
              But Slack already does this — you just have to be signed in to
              each workspace. Users want agility, and they think Idea 2 will
              give them that, but since it’s already provided in the product,
              implementing Idea 2 is unnecessary.
              <br />
              <br />
              Furthermore, by choosing Idea 1, we avoid the issues that come
              with with Idea 2. Allowing users to choose their email address
              means presenting many options at once, which complicates the UI.
              From testing, users also perceive it to be less secure.
            </p>
          </div>
          <div className="block">
            <h2 className="block-title">What I learned and next steps</h2>
            <p className="center-with-margins">
              Gaining experience on a personal project while interning at EA
              helped me learn a lot, fast. Now I know that designers should
              solve for the root of a problem, not treat the symptoms. I
              practiced this with Slack — when choosing between two different
              solutions, I could’ve taken the users’ feedback literally.
              Instead, I thought about the root cause of why they preferred one
              option over the other, and made my choice based off of that.
              <br />
              <br />
              I also learned how to scope down a problem and how to say no to
              less important problems. This project introduced me to Effort vs
              Value charts and Net Promoter Scores. It taught me the importance
              of benchmarking and finding out if the new designs made a
              difference, whether positive or negative.
              <br />
              <br />
              If I had more time, I would explore if Slack could benefit from
              having different levels of security for different types of
              workspaces. I’d also look into password-free sign in methods.
            </p>
            <div className="center-with-margins">
              <img
                className="arrow"
                src={require('../../images/arrow_upward.svg')}
                alt="back to top"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
          </div>
        </div>
        <div className="center-with-margins">
          <FooterComponent />
        </div>
      </>
    );
  }
}
