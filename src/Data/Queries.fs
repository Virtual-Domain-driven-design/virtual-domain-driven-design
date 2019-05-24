module App.Data.Queries

open System
open App.Types

let sessions =
    [
        Upcoming_session {
              title = "SunDDDay discussion: EventStorming and User story mapping for domain discovery"
              date = "Sunday, May 26th. 2019 - 15:30 GMT / 16:30 CET"
              img = Some "https://secure.meetupstatic.com/photos/event/6/f/a/2/highres_477448578.jpeg"
              video = None
              embedded = None
              description = "On this first SunDDDay 26th May at 16:30 Central European Time (Amsterdam GMT +2), virtual DDD meetup will hold an online panel discussion where you can ask questions!

                             Marco Heimeshoff, and Kenny baas-Schwegler (with a possible attendance by Zsófia Herendi and Trond Hjorteland) will discuss their experience with EventStorming and User story mapping for domain discovery.

                            The two main questions are:
                            * How can we best combine User Story Mapping and EventStorming for domain discovery.
                            * How can we go from EventStorming to user stories.
                              "
              links =
                  [
                      { label = "The event on Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/257656741/" }
                  ]
                  }
        
        Past_session
          {
              title = "CraftConf meetup with Nick Tune and Helin Akgul"
              date = "Wednesday, May 8th. 2019"
              img = None
              video = Some "https://www.ustream.tv/embed/recorded/121763272"
              embedded = None
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
              img = None
              video = Some "https://www.ustream.tv/embed/recorded/120901497"
              embedded = None
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