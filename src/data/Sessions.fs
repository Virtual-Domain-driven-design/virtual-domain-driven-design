namespace VDDD.Data

module Sessions =

    open VDDD

    let sessions =
        [   
                 
            Upcoming_session {
                          title = "Experimenting with Remote Wardley Mapping with Nick Tune"
                          date = "Friday, May 1st. 2020"
                          time = "19:00 CEST"
                          img = Some "https://secure.meetupstatic.com/photos/event/6/4/2/4/highres_490225636.jpeg"
                          video = None 
                          embedded = None
                          podcast = None
                          description = "Wardley Mapping is a strategic tool for anticipating how domains will evolve over time.
                                         
                                         In this session, we’ll learn the basic theory behind Wardley Maps and then jump into hands-on exercises.
                                         
                                         It is recommended that you read Ben Mosior’s excellent article before attending this session: Wardley Mapping with Miro.
                                         
                                         https://miro.com/blog/wardley-maps-whiteboard-canvas/"
                          
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270234608/" }
                                  { label = "Youtube" ; url = "https://youtu.be/Rvt7k542fOI" }
                                  { label = "Zoom" ; url = "https://zoom.us/j/84649365514" }

                              ]
            }
                   
            Past_session {
                          title = "How to improve modelling with Behaviour-driven development"
                          date = "Tuesday, April 14th. 2020"
                          time = "19:30 CEST"
                          img = None
                          video = Some "https://www.youtube.com/embed/HvT8wNE1C2U"
                          embedded = None
                          podcast = Some "https://oembed.libsyn.com/embed?item_id=13996931" 
                          description = "Behaviour Driven Development (BDD) is a term that was coined by Dan North in 2006. It came about as a response to a very specific problem – teaching developers how to think about testing their code. It incorporates the ubiquitous language idea from Eric Evan’s book Domain-Driven Design, and this evolved into a technique used by the whole team to collaboratively specify how the finished system should behave. While both approaches focus on collaboration, DDD focuses on a shared model for building software and BDD focusses on specifying the behaviour of the system. So what can we learn from both our techniques?

                                        Join us in this session were Seb Rose, Steve Tooke and Matt Wynne will discuss with us how we can improve modelling with BDD. We will bust popular BDD myths and talk about their favourite collaboration techniques."
                          
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/269885290/" }
                              ]
            }
            
            Past_session {
                          title = "How cognitive biases and ranking kills your modelling sessions"
                          date = "Tuesday, April 7th. 2020"
                          time = "19:00 CEST"
                          img = None
                          video = Some "https://www.youtube.com/embed/djbbZnOIGE0"
                          embedded = None
                          podcast = Some "https://oembed.libsyn.com/embed?item_id=13899341" 
                          description = "The power of collaborative modelling comes from having a diverse group of people who, together, have a lot of wisdom and knowledge. You would expect that all this knowledge will be put to use, co-creating, and to design a model. In reality, we don’t actually listen to all the available input and perspectives due to cognitive biases and ranking. Good modelling needs all the insights and perception to design the best one. If you are not aware, cognitive biases and ranking kills those insights and kills the effectiveness of your models!

                                            Join us in this session talking with Evelyn van Kelle and Romeu Moura about how awareness of your own cognitive biases and your ranking in the group can create more effective models! We will discuss how to use biases and ranking in your favour, making sure people are not excluded, and every knowledge is rally heard and put to good use in your models!"
                          
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/269784134/" }
                              ]
            }
            
            Past_session {
                          title = "Secure by Domain-driven design with Jessica, Dan Bergh and Daniel"
                          date = "Friday, April 3th. 2020"
                          time = "16:00 CEST"
                          img = None
                          video = Some "https://www.youtube.com/embed/BpMzn9AxNcw"
                          embedded = None
                          podcast = Some "https://oembed.libsyn.com/embed?item_id=13843517" 
                          description = "Let's talk about the confluence between domain-driven design and security. Deep understanding of the domain lets us define what we DO want to happen, which helps us stop things that we DON'T want to happen. Jessica Kerr will start the meeting up with an exposition of her favorite parts of the book Secure By Design and together with Dan Bergh Johnsson and Daniel Deogun we will do a panel discussion and Q&A. Come add your perspective at the Virtual DDD meetup."
                          
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/269741788/" }
                              ]
            }
            
            Past_session {
                          title = "Lost in bounded context translations with Julie, Indu, Michael and Nick"
                          date = "Tuesday, March 17th. 2020"
                          time = "19:00 CET"
                          img = None
                          video = Some "https://www.youtube.com/embed/u-5sKvh48-g"
                          embedded = None
                          podcast = Some "https://oembed.libsyn.com/embed?item_id=13594496" 
                          description = "Language is a big topic in the Domain-Driven Design community. We want to have small bounded contexts, each with there own ubiquitous language. Having many ubiquitous languages means having a lot of translation between the bounded context. And having many translations means we can get lost. So what is the nuance between internal and external bounded context or services translation?

                                         Join us in a conversation with Julie Lerman, Indu Alagarsamy, Michael Plod and Nick Tune to talk about these nuances. We will talk about all the concept of dealing with these translations. From Anti-corruption, interchange, gateway, upcasting events plus the relationship patterns like the conformist, partnership and newer patterns."
                          
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/268706059/" }
                              ]
            }
            
            Past_session {
                          title = "An Introduction to Domain Storytelling"
                          date = "Tuesday, February 18th. 2020"
                          time = "20:00 CET"
                          img = None
                          video = Some "https://www.youtube.com/embed/d9k9Szkdprk"
                          embedded = None
                          podcast = None
                          description = "Domain Storytelling (http://domainstorytelling.org) is a collaborative modelling method. It brings together domain experts and development teams and helps them to understand a domain, find bounded contexts, to establish a ubiquitous language, and to talk about requirements.

                                        The meetup features a live-modelling session."
                          
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/268709233/" }
                              ]
            }

            Past_session {
                          title = "Trying out online EventStorming"
                          date = "Tuesday, January 21th. 2020"
                          time = "19:00 CET"
                          img = None 
                          video = Some "https://www.youtube.com/embed/CbPEibNUe0s"
                          embedded = None
                          podcast = None
                          description = "EventStorming is the smartest approach to collaboration beyond silo boundaries. Within the DDD community, it is the go-to visualisation and collaboration tool to start exploring and discovering together.

                                            We believe firmly that the power of EventStorming is with having all the smart people who together have all the knowledge in a room. However, this poses a challenge when you work with people off-site, and it is a question that has been asked a lot by many people.

                                            So join us in this session where we will do an online software modelling EventStorming on miro board together with some community friends! During the EventStorming, we will discuss what concerns we have, and where we might actually see it work. We will together distil our heuristics for online EventStorming!
                                            
                                            People who will Join us:
                                            Indu Alagarsamy
                                            Maxime Sanglan-Charlier
                                            Barry O Sullivan"
                          
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/266891201/" }
                              ]
            }

            Past_session {
                          title = "Virtual Lean Coffee Fishbowl: UX, DDD and BDD"
                          date = "Thursday, January 16th. 2020"
                          time = "20:00 CET"
                          img = None
                          video = Some "https://www.youtube.com/embed/QelbEUblpLo"
                          embedded = None
                          podcast = Some "https://oembed.libsyn.com/embed?item_id=12776882"
                          description = "It all started with a tweet by John Cutler <>. And it seemed that a lot of people from these communities learned a lot from each other. And we would love to learn more about different areas of overlap. It seems like goals and culture are aligned in both communities.

                                        Join us in this Virtual Lean Coffee, where a panel of 10-15 people from the UX, DDD and BDD community will exchange topics that overlap with each community. The great thing is, you can participate because we are making the Lean Coffee a fishbowl! Join zoom and join us live in the discussion, or just sit back and enjoy the stream from youtube and ask questions in the chat! Hope to see you there!

                                        The people who have confirmed so far are:
                                        Dawn Ahukanna
                                        Indi Young
                                        Rebecca Wirfs-Brock
                                        Fredrik Matheson
                                        Gojko Adzic
                                        John Cutler
                                        Matt Wynne
                                        Paul Rayner
                                        Robert Meaney
                                        Steve Tooke
                                        Jabe Bloom
                                        Sam Hatoum
                                        John Ferguson Smart
                                        and more to come...."

                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/267220779/" }
                              ]
            }

            Past_session {
                          title = "How feature branching affects domain-driven design with Thierry de Pauw"
                          date = "Tuesday, January 8th. 2020"
                          time = "19:00 CET"
                          img = None 
                          video = Some "https://www.youtube.com/embed/mKaIR-EjoC0"
                          embedded = None
                          podcast = Some "https://oembed.libsyn.com/embed?item_id=12672260"
                          description = "Feature branching is again gaining in popularity due to the rise of distributed version control systems. Although branch creation has become very easy, it comes with a specific cost. Long living branches break the flow of the software delivery process, impacting throughput and stability, but does it also affect the quality of our domain model?

                                        Join us with Thierry de Pauw in this Virtual DDD sessions to explore with us how feature branching can impact domain-driven design. Because one of the critical aspects of DDD is to keep gaining new insights together to create a rich and rigid domain model. For this, we need fast feedback which could be disabled by feature branching."

                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/267162816/" }
                              ]
            }
            
            
            
            Past_session {
                          title = "Combatting the Near Enemies of Domain Driven Design at Scale"
                          date = "Wednesday, December 11th. 2019"
                          time = "19:00 CET"
                          img = None
                          video = Some "https://www.youtube.com/embed/3CFyA4iecng"
                          embedded = None
                          podcast = Some "https://oembed.libsyn.com/embed?item_id=12378590"
                          description = "For the past decade and a half, Domain-Driven Design has been giving teams the tools to successfully tackle the complexity at the heart of software. But lots of people fail when they try to put its techniques and patterns into practise, especially at scale.
                                        Why? It can't just be because the Bluebook is so thick? We're going to argue that the near enemies of DDD are to blame. Things which look like DDD, but which are in fact counterfeits that push us farther away from our goal.
                                        Join us with Gayathri and Andrew who will tell the story of a large-scale DDD implementation that got complicated. They'll talk about how took stock of the situation as they found it, how they identified where the root problems lay, how they set everyone off on a course of success, and the mistakes we made along the way.
                                        Regardless of whether you are working with serverless, microservices or a more monolithic architecture (nothing wrong there!) - this fun talk is for those who want to learn the lessons of implementing DDD at scale, with a healthy dose of pitfalls and hazards to watch out for too."
                          
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/266722931/" }
                              ]
            }
            
            Past_session {
                          title = "Does a Domain-driven design approach need an agile business?"
                          date = "Tuesday, December 3st. 2019"
                          time = "19:30 CET"
                          img = None
                          video = Some "https://www.youtube.com/embed/hKBSmQCMEqQ"
                          embedded = None
                          podcast = Some "https://oembed.libsyn.com/embed?item_id=12275561"
                          description = "On twitter, a discussion started between Trond, Anton and Krisztina about working in agile product development without a clear business goal. Since twitter is a restricted medium to discuss these issues, we are taking it upon our VirtualDDD Meetup.

                                         Join us with Trond, Anton and Krisztina and let's have an honest discussion about what it means to work agile. What are the pros and cons? We dig into the underlying principles and philosophy of agile, diving into the practical instead of the theoretics of business agility. Do we need the business to be agile to do proper Domain-driven design, and what are the overlaps between agile and Domain-driven design?"
                          
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/266604287/" }
                              ]
            }
            
            Past_session {
                          title = "SunDDDay Discussion: Growing your local DDD community"
                          date = "Tuesday, December 1st. 2019"
                          time = "19:00 CET"
                          img = None
                          video = Some "https://www.youtube.com/embed/sXdSjhWNeMg"
                          embedded = None
                          podcast = Some "https://oembed.libsyn.com/embed?item_id=12244241"
                          description = "Getting started or advancing your Domain-Driven Design knowledge on your own can be a frustrating experience. Especially when you have so many questions to ask and exciting domains to model. How do you then grow if there is no one in your company or area that shares your passion for DDD?
                                        During this Virtual DDD meetup Zsofia and Kacper will share their experiences in building communities in Hungary and London. They will discuss on topics such as finding speakers, venues, managing attendance and how to deal with no-shows. You will have an opportunity to join in and ask questions that we can crunch further. Let’s make it easier to start an own meetup group and try to figure out together how to grow as a domain modeller and meetup organiser."
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/266560974/" }
                              ]
            }
            
            Past_session {
                          title = "Make your tests tell the story of your domain with Anne and Mads"
                          date = "Tuesday, November 12th. 2019"
                          time = "19:00 CET"
                          img = None
                          video = Some "https://www.youtube.com/embed/7_KZ8_R4oOU"
                          embedded = None
                          podcast = Some "https://oembed.libsyn.com/embed?item_id=12018827"
                          description = "Even with perfect naming and perfect code, it is hard to read the story of your domain straight out of it. You can be certain that you’ll have forgotten some of the nuances about the code the next time you see it. Or someone else sees it, because very few of us live our professional coding lives in an area where it’s only me ever handling the code. Someone is going to come back to your code - in five days, three months or five years.

                                        Luckily, if you write your tests the right way, they can tell the story of your domain in a way your production code can't. Let us show you how to create your tests so you can get rid of your stale documentation."
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/266077606/" }
                              ]
            }
            
            Past_session {
                          title = "What is an aggregate with Thomas Ploch"
                          date = "Wednesday, November 6th. 2019"
                          time = "18:30 CET"
                          img = None
                          video = Some "https://www.youtube.com/embed/7h3DqZmvF9A"
                          embedded = None
                          podcast = Some "https://oembed.libsyn.com/embed?item_id=11938403"
                          description = "Within the community there is been an ongoing discussion about the aggregate pattern. From Eric Evans perspective it is:

                                        An architectural pattern that enforces the consistency of a set of interrelated constraints, by defining a transactional boundary, a concurrency boundary, and a distribution boundary.
                                        A lot of people seem to have different perceptions, different explanations or altogether don't think we need to use the pattern. In this #VDDD meetup, Thomas Ploch will tell us his vision and after we will open the dialogue and try to make more explicit: What is an aggregate and how do we teach this to other people."
                          links =
                              [
                                  { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/265895741/" }
                              ]
            }
            
            Past_session {
                          title = "Introducing DDD to your Company with Barry O Sullivan"
                          date = "Tuesday, September 24th. 2019"
                          time = "19:00 CEST"
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
                  time = "19:00 CEST"
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
                  time = "24:00 CEST"
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
                  time = "19:00 CEST"
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
                  date = "Thursday, July 18th. 2019"
                  time = "18:30 CEST"
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
                  time = "20:00 CEST"
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
                  time = "18:30 CEST"
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
                  time = "16:30 CET"
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