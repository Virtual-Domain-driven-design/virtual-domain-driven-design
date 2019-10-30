module VDDD.Data.Queries

open VDDD.Types

let sessions =
    [
        Upcoming_session {
                      title = "What is an aggregate with Thomas Ploch"
                      date = "Wednesday, November 6th. 2019"
                      time = "18:30 Berlin "
                      img = Some "https://secure.meetupstatic.com/photos/event/1/c/b/8/highres_486007352.jpeg"
                      video = None
                      embedded = None
                      podcast = None
                      description = "Within the community there is been an ongoing discussion about the aggregate pattern. From Eric Evans perspective it is:

                                    An architectural pattern that enforces the consistency of a set of interrelated constraints, by defining a transactional boundary, a concurrency boundary, and a distribution boundary.
                                    A lot of people seem to have different perceptions, different explanations or altogether don't think we need to use the pattern. In this #VDDD meetup, Thomas Ploch will tell us his vision and after we will open the dialogue and try to make more explicit: What is an aggregate and how do we teach this to other people."
                      links =
                          [
                              { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/265895741/" }
                              { label = "Zoom" ; url = "https://zoom.us/j/441297649" }
                              { label = "Youtube" ; url = "https://youtu.be/7h3DqZmvF9A" }
                          ]
        }
        
        Upcoming_session {
                      title = "Make your tests tell the story of your domain with Anne and Mads"
                      date = "Tuesday, November 12th. 2019"
                      time = "19:00 Amsterdam"
                      img = Some "https://secure.meetupstatic.com/photos/event/a/0/e/a/highres_486221194.jpegs"
                      video = None
                      embedded = None
                      podcast = None
                      description = "Even with perfect naming and perfect code, it is hard to read the story of your domain straight out of it. You can be certain that you’ll have forgotten some of the nuances about the code the next time you see it. Or someone else sees it, because very few of us live our professional coding lives in an area where it’s only me ever handling the code. Someone is going to come back to your code - in five days, three months or five years.

                                    Luckily, if you write your tests the right way, they can tell the story of your domain in a way your production code can't. Let us show you how to create your tests so you can get rid of your stale documentation."
                      links =
                          [
                              { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/266077606/" }
                              { label = "Zoom" ; url = "https://zoom.us/j/850723380" }
                              { label = "Youtube" ; url = "https://youtu.be/7_KZ8_R4oOU" }
                          ]
        }
        
        Past_session {
                      title = "Introducing DDD to your Company with Barry O Sullivan"
                      date = "Tuesday, September 24th. 2019"
                      time = "19:00 Paris-Amsterdam / 18:00 London Time / 13:00 Eastern Time (US and Canada)"
                      img = None 
                      video = Some "https://www.youtube.com/embed/Vb7ZwYQPqqQ"
                      embedded = None
                      podcast = Some "https://oembed.libsyn.com/embed?item_id=11387732"
                      description = "DDD is about enabling developers and business owners to work together on a collaborative model, but how do you introduce the concept? In a world rife with acronyms and buzzword, people can be hesitant to try out new ideas, especially ones that involve changing the status quo.

                                    In this session, we'll discuss various techniques and ideas for introducing DDD to an organisation, with a focus on the needs of the company and individuals, and how to approach those needs. Afterwards, you'll be better able to demonstrate the value of DDD to stakeholders, without scaring them off with a load of new jargon.

                                    Join us in this conversation with Barry O Sullivan. You can join the conversation through zoom webinar fishbowl style asking questions live. Alternatively, you can always ask questions through the chat on zoom or youtube or just sit back and relax and watch the youtube stream!"
                      links =
                          [
                              { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/264423503/" }
                          ] }
        
        Past_session {
              title = "SunDDDay discussion: CQRS & Event Sourcing systems with Alexey and Marco"
              date = "Sunday, August 25th. 2019"
              time = "19:00 Paris-Amsterdam / 18:00 London Time / 13:00 Eastern Time (US and Canada)"
              img = None
              video = Some "https://www.youtube.com/embed/5e7lhY2q8WQ"
              embedded = None
              podcast = Some "https://oembed.libsyn.com/embed?item_id=11736308"
              description = "In the next SunDDDay discussion Alexey Zimarev and Marco Heimeshoff will join us and share their experience in building systems with CQRS and Event Sourcing. We will discuss what it exactly is, where it came from, what the strength and weaknesses are, when and how to use it, and how to design and maintain these systems.

                             Join us through zoom webinar or follow the live youtube stream. You can interact with us and ask your questions through chat, or raise your hand in the zoom webinar and join us live to ask your questions fishbowl style!"
              links =
                  [
                      { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/264122914/" }
                  ] }
        
        Past_session {
              title = "EventStorming Types and Heuristics with Rebecca, Paul and Alberto"
              date = "Thursday, August 8th. 2019"
              time = "24:00 Paris-Amsterdam / 23:00 London Time / 18:00 Eastern Time (US and Canada)"
              img = None
              video = Some "https://www.youtube.com/embed/jFEC7Pb1FtM"
              embedded = None
              podcast = Some "https://oembed.libsyn.com/embed?item_id=11469908"
              description = "Rebecca Wirfs-Brock, Paul Rayner en Alberto Brandolini will join us in this VDDD meetup and talk about what types of EventStorming there are, and what heuristics they use.

                            Join us through youtube or zoom webinar in this discussion. You can interact with us and ask your questions through chat, or raise your hand in the zoom webinar and join us live to ask your questions fishbowl style!
                              "
              links =
                  [
                      { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/263800593/" }
                  ] }
                  
        Past_session {
              title = "How To Read the Blue Book: Strategic Design with Mathias Verraes"
              date = "Tuesday, July 23th. 2019"
              time = "19:00 Paris-Amsterdam / 18:00 London Time"
              img = None 
              video = Some "https://www.youtube.com/embed/jZo44tbff1c"  
              embedded = None
              podcast = Some "https://oembed.libsyn.com/embed?item_id=10995584"
              description = "Over more than 15 years ago, Eric Evans published the book Domain-Driven Design. The blue book, as it is called today, has a vast amount of knowledge on software architecture. As Paul Rayner once stated 'Every new idea on software architecture; you can already find somewhere in the blue book'. Because the knowledge is so fast to take in at one go, a lot of people who bought the book never finished the book, mostly stopped reading before Part IV, strategic design. Therefore in this #VDDD special 'How to read the blue book,' Mathias Verraes will discuss with the strategic parts.
                              "
              links =
                  [
                      { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/262894722/" }
                          ] }
        
        Past_session {
              title = "Socio-technical architecture with Ora Egozi-Barzilai and Evelyn van Kelle"
              date = "Thursdayup, July 18th. 2019"
              time = "18:30 Paris-Amsterdam / 17:30 London Time"
              img = None
              video = Some "https://www.youtube.com/embed/YqbXEhO237w" 
              embedded = None
              podcast = Some "https://oembed.libsyn.com/embed?item_id=11027246"
              description = "In this # VDDD meetup, we will talk with Ora Egozi-Barzilai and Evelyn van Kelle about their experience with socio-technical architecture. Socio-technical refers to the interrelatedness of social and technical aspects of an organization. Specific for this meetup we will discuss how teams affect the boundaries between bounded contexts and vice versa. These effects will give challenges in the way we design software architecture and organize teams around software to be highly aligned with business goals.

                             Come join us, because together we can ask questions and discuss heuristics and patterns with Ora and Evelyn about socio-technical architecture!
                              "
              links =
                  [
                      { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/262894709/" }
                  ] }
        
        Past_session {
              title = "Can business capabilities be useful in DDD with Trond Hjorteland"
              date = "Tuesday, June 25th. 2019"
              time = "20:00 Paris-Amsterdam / 19:00 London Time"
              img = None
              video = Some "https://www.youtube.com/embed/WSAHL7oHGUw"
              embedded = None
              podcast = Some "https://oembed.libsyn.com/embed?item_id=11085401"
              description = "In this SPA conference special, we will talk with Trond Hjorteland about if business capabilities are useful in DDD.

                            The DDD community seems to consist of mostly technical people, or at least with some sort of hands-on programming experience, both now an back when the blue book was published. The decision to put the technical patterns at the start of that book was strategic (!) in that it was meant to invite the programmers in. As a consequence of that, it seems that most know very little about the enterprises' architecture space, and if they do, it seems to be with disdain for those dreaded ivory architects. And, for good reason in a lot of large waterfall-driven enterprises.

                            My thesis is that by this approach we as a community is throwing the baby out with the bathwater, at least some parts. There are things we ought to take a look at and incorporate into our toolbox, like architectural principles and business capabilities. The latter has been something I have had a special keen interest for, coming from the SOA space, and see a lot of parallels with the strategic patterns in DDD. I even believe it can be a great technique for getting started with discovering the problem space and even guide defining the bounded contexts.

                            I would love to have a good discussion on this and maybe we all can gain some new insights. That is always good, right?
                              "
              links =
                  [
                      { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/262123121/" }
                  ] }
        
        Past_session {
              title = "Impact Mapping to manage change and strategic design"
              date = "Thursday, June 13th. 2019"
              time = "18:30 Paris-Amsterdam / 17:30 London Time"
              img = None
              video = Some "https://www.youtube.com/embed/7u-EtXVKR5g"
              embedded = None
              podcast = Some "https://oembed.libsyn.com/embed?item_id=11057267"
              description = "In this next virtual DDD meetup, João Rosa and Krisztina Hirth will discuss with us how impact mapping helps to find the possible solutions to achieve a measurable goal before you even know what to visualize. Also, how can you then combine it with other visualisation tools like EventStorming to guide your strategic design?

                             In our industry, we have been assisting in digital transformations; the digital transformations have different labels, DevOps, Agile, Cloud, amongst others. However, most of these transformations just following a script, applying the same recipe everywhere. This approach has its merits, but also its pitfalls.

                               To balance the change, visualisation techniques can be applied, aiding people, teams and organisations to manage the change and guide strategic design.
                              "
              links =
                  [
                      { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/262096256/" }
                  ] }
        
        Past_session {
              title = "SunDDDay discussion: EventStorming and User story mapping for domain discovery"
              date = "Sunday, May 26th. 2019"
              time = "15:30 GMT / 16:30 CET"
              img = None
              video = Some "https://www.youtube.com/embed/H553KZPCJQk"
              embedded = None
              podcast = Some "https://oembed.libsyn.com/embed?item_id=11445518"
              description = "On this first SunDDDay 26th May at 16:30 Central European Time (Amsterdam GMT +2), virtual DDD meetup will hold an online panel discussion where you can ask questions!

                             Marco Heimeshoff, and Kenny baas-Schwegler (with a possible attendance by Zsófia Herendi and Trond Hjorteland) will discuss their experience with EventStorming and User story mapping for domain discovery.

                            The two main questions are:
                            * How can we best combine User Story Mapping and EventStorming for domain discovery.
                            * How can we go from EventStorming to user stories.
                              "
              links =
                  [
                      { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/257656741/" }
                  ] }
        
        Past_session
          {
              title = "CraftConf meetup with Nick Tune and Helin Akgul"
              date = "Wednesday, May 8th. 2019"
              time = ""
              img = None
              video = Some "https://www.ustream.tv/embed/recorded/121763272"
              embedded = None
              podcast = None
              description = "Nick Tune is coming to talk at Craft Conference (yaaay!!) and whilst he is here in Budapest he brings us one of his future talks (Strategic Microservice Patterns - find details below) and present it on this meetup, so DO NOT MISS IT :)
                              I am also pleased to announce another great presenter Helin Akgul. She will be talking about DDD practices in TransferWise, and she will be giving some examples around how they are using product engineering to create domain experts, and tips and tricks to adopting DDD practices gradually.
                              I will post the abstract of her talk very soon.
                              "
              links =
                  [
                      { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/261134675/" }
                      { label = "Hosted by DDD Budapest" ; url = "https://www.meetup.com/DDD-Practitioners-in-Budapest/events/260694621/" }
                  ] }

        Past_session
          {
              title = "Patterns for the People - Kevlin Henney"
              date = "Tuesday, April 2nd. 2019"
              time = ""
              img = None
              video = Some "https://www.ustream.tv/embed/recorded/120901497"
              embedded = None
              podcast = None
              description = "Have you thought about that maybe all you know about patterns is just misconceptions? 
                In this talk, Kevlin will take us to an alternative tour of patterns, one that is based on improving the habitability of code, communication, exploration, empiricism, reasoning, incremental development, sharing design and bridging rather than barricading different levels of expertise. 
                Apparently, everyone knows about patterns. Except for those who don't. Which is basically all the people who've never come across patterns... plus many of the people who have. 
                Singleton is often treated as a must-know pattern. Patterns are sometimes considered to be the basis of blueprint-driven architecture. Patterns are sometimes seen as a fixed set of ideas to apply within a school of thinking and practice, such as DDD. Patterns are also seen as something you don't need to know any more because you've got frameworks, libraries and middleware by the download. Or that patterns are something you don't need to know because you're building on diagrams, legacy code or emergent design. All these and more are misconceptions about patterns. 
                Let's shift the focus from consuming patterns to recognising them, mining them and reasoning through them, with them and about them."
              links = 
                [
                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/260116772/" }
                  { label = "Hosted by DDD Budapest" ; url = "https://www.meetup.com/DDD-Practitioners-in-Budapest/" }
                ] }
    ]