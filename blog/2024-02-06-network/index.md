---
slug: network
title: Measuring DAOness and the Transition of the Grape Team
authors: [nevvdevv]
tags: [dao, work, solana, network states]
---

**The word DAO has become a meme.** Across crypto, there are now thousands of projects that claim to be DAOs. This is commonly justified by the simple use of a discord bot for verification or a multisig account. In some even more extreme instances, projects are called DAOs simply by adding the word DAO to their name.

**Why leverage the DAO name?** The future of digital governance is most certainly rooted in innovations happening in DAOs and the interconnected tooling space. Very few people would argue with that statement after experiencing the positive benefits that a well functioning and legitimate DAO offers us.

This meme DAO trend is hurting real progress by diluting attention away from real DAOs and hindering their ability to make a meaningful difference globally for the betterment of the world we live in. To fix this, a concerted effort is needed to identify the real DAOs in an easy and quantifiable way; using simple, but key metrics. A methodology is needed to easily measure the DAOness of a DAO based on its level of decentralization around control and decision making processes.

## The most popular DAO statistics on sites like DeepDAO or Realms

**Treasury:** assets under control. This is currently the most common way to rate the success of a DAO.

**Members:** how many people are considered members of a DAO. This is commonly done by counting token holders or people that have voted before.

**Proposals:** how many proposals have been made.

**Votes:** how many unique votes across proposals and average voter count per proposal.

These stats are great to measure organizations, but I believe they fail in accurately measuring DAOness because they can be used on ANY
organization!

Lets use Apple as an example:

- Treasury: massive with over 20 billion.
- Members: 100,000s counted as shareholders.
- Proposals: multiple proposals happening in the board room.
- Votes: multiple votes happening in the board room.

These statistics taken in their absolutes are not useful in measuring DAOness because they ignore 2 key aspects about DAOs;

Decentralized enough to prevent a small group of people from overwhelmingly influencing decisions.
Automatically executing these decisions.

## Ways to Measure DAOness

Focusing on these 2 unique traits of DAOs, we can start to construct a framework for scoring decentralization of a social organization. In this discussion, I’ll only focus on token voting systems; DAOs like Grape, Mango, and UXD.

**Removing Centralized Decision Making**

The first trait focuses on removing centralized decision making. The inverse of this is called a chokepoint; a step in process where a minority can stop or disrupt the decisions of the majority. Identifying chokepoints would be the most important dimension to measure for token voting systems.

> Significant chokepoints: decisions regarding treasury and program updates

Less significant: decisions executed after polling votes

**A rough spectrum of decentralization (centralized → decentralized) would look like this:**

- One holder can propose and pass a proposal; is called a “key”
- One holder must be part of a vote to pass a proposal ; is called a “key opinion”
- One holder can become a “key” or “key opinion” through token purchase; called a “key purchaser”
- One holder cannot become a “key” or “key opinion”

This is of course an oversimplification, but it shows a rough way to look at token distribution as a means to measure decentralization in a DAO. For Grape, there are no active voters that are keys or key opinions, but it is still possible for someone to be a key purchaser.

**Automated Execution**

The 2nd trait focuses on automated execution. The inverse of this is manual execution; a step is manual due to 1 of 3 (or a combination) of the following reasons:

- There are no tools to trigger the execution. This refers to web2 systems like a social platform (Discord/Twitter) or off-chain contracts like legal agreements.
- It is impractical to automate execution. This refers primarily to tasks that are creative like writing or design.
- There is no path for any DAO member to be part of execution. This refers to executions that are handled by a minority without voting like Discord channel creation.

In Grape, control over Discord is a good example of all three. There is no tool to execute changes from a program, it would be impractical to have every discord change to be automated, and there are no votes to delegate control of the discord to another DAO member.

Even though these decisions cannot be automated, a DAO can hold elections to assign manual control and set up redundancies to remove control. Each manual operation that does not have either elections or redundancies is a knock against DAOness.

**One last dimension to consider**

DAOs are progressive and there should be milestones associated with their DAOness, in order to not discriminate against early formation DAOs. When Grape was created, there were no Realms, so virtually all decisions had to be made and executed by a small group of people.

But now that many of these tools exist, what should we expect from a DAO during its early days? This is a spectrum influenced by time and participating holders. There must be early efforts to allow holders to voice their opinions, but if there are no efforts to change or participate in governance, is there an urgency to decentralize further?

An even more concerning scenario is when the original minority does not relinquish control or holds too much voting power to allow for a true DAO. Even with small distinctions between “team” and “community”, it will be very difficult to cultivate a participation and ownership environment. A true DAO needs to remove this distinction as soon as the tools and participation from holders exist.

**Grape’s path towards being the most decentralized DAO**

Now that we have established a base for measuring DAOness, it is time for Grape to move towards this ideal. If we are going to be at the forefront of building tools for DAOs and decentralized communities, we need to be able to understand the problems so we can create the frameworks for the DAOs of the future.

### Removal of Grape Team

There should not be a separate group of people with special privileges or controls that have not been granted by the DAO. Grape was created by a small number of contributors and was launched when few tools for DAOs on Solana existed.

Now that there are over 10,000 members and multiple DAO tools such as Realms and Squads, it is time to put all of these special privileges to DAO vote, effectively removing the differentiation between a Grape team member and a Grape community member. Effective as of publishing this article, there is no “Grape Team” but an expanded Grape community.

Below are the proposals that would remove any semblance of a privileged group influencing the future or decisions of Grape:

- Transfer of the Raydium IDO fund: A proposal to transfer the remaining 500,000 USDC from the 600,000 USDC that was raised in the Raydium IDO of Grape.
- Vote on staying on the default instance of spl-governance vs deploying our own: This would be a polling vote to decide who essentially controls updates to our Realms (spl-governance council controls the upgrades of the default instances — you can find those members here and I am one of them https://realms.today/dao/Governance/members). This vote might require legal input (ie Wyoming DAO incorporation requires a specific address for the DAO smart contract).
- Removal of the Realms council tokens OR the complete removal of a council: A proposal to burn and remove all council tokens.
- Assignment of owners for Discord/Twitter/Website/Gitbook/Discourse and all other assets used by Grape: This would be a polling vote to decide who should control these accounts. This needs to be a polling vote today for lack of tooling to assign control of web2 logins. This would include permissions on Discord. Both Gitbook and Discourse already have community members with administrative privileges.
- Assignment of Emissions distribution: This would be a polling vote to decide who/how the membership emissions are sent out. Ideally, the emissions plan could be executed completely from Realms instruction to a streaming protocol like MeanFi or Streamflow.
- Removal of all assets from the Grape wallet account (currently holding the bulk of our NFT treasury and liquid funds not in Realms/Squads) OR assignment of an owner.
- Assignment of legal representation for the Grape DAO: This could be a polling vote. We are hopeful that this can be done without requiring a single representative.
- Assignment of process and roadmap towards DAO Board election and disqualification (currently this is undefined). \*GodsloveDAO

### The most dangerous proposal:

Transfer of the Mint authority to Realms: A proposal to have the Realms program control the mint authority. This would occur after all 1 billion Grape have been minted and put into vesting contracts to enforce the tokenomics as laid out at the inception of Grape.

## Why is now the right time?

- Voter participation is high enough that the quorum can be increased.
- The proposal threshold is low enough that enough members can introduce new proposals.
- Realms provide the tools needed for this level of decentralization.
- No cohort of voters has enough voting power to force proposals.
- We have tested and implemented fail-safes in the event of an attack on the treasury.

## Why now might still be too early?

Despite Grape’s wide distribution of voting power, there is still the problem of the DAO being controlled by anyone with the financial ability to purchase more Grape. Tools like Mango’s Token-Locking are a good tool for better aligning incentives, but it still remains very plutocratic.

For Grape (and any DAO) to remove this financial chokepoint, there must be a voting weight applied to the tokens. This would likely include metrics like time as a member, participation in community and governance, and completed bounties or GitHub submits. The range of actions that can be used to measure and grant governance power is wide and a completely open design space.

> _It would be my recommendation to deploy a reputation based voting weight, and in the short-term, it would be applied through election. A community can easily identify individuals who are most involved, but quantifying that magic we use in our brains is a huge obstacle. Tracking participation and applying a formula to dependably identify these people without human involvement requires an incentives design that does not exist today (and likely Grape will be amongst the first to create one)._

### An ideal timeline moving forward

- Discussion around these topics to further explore and educate on each decision.
- Implementation of an elected, reputation-based, voting weight.
- A series of proposals as outlined above, decided by the DAO.

This is the most exciting moment ever in Grape and I look forward to working together on this new phase as a fellow member of the community!!
