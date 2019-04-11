module App.Data.Queries

open System
open App.Types

let sessions =
    [
//        Upcoming_session {
//              title = "The amazing Spider-Kenney catches bugs"
//              date = "Tuesday, June 5th. 2019 - 19:00 GMT"
//              img = None
//              video = None
//              description = "Spider-Kenney, Spider-Kennes, does whatever a Spider-Kenney does. Spinns a web, Sticks a note, he has radio active code..."
//              links =
//                  [
//                   { label = "Amazing link" ; url = "https://www.beamazed.com" }
//                   { label = "Another amazing link" ; url = "https://www.beamazed.com" }
//                   { label = "Follow the white rabbit" ; url = "https://www.beamazed.com" }
//                  ] }
        
        Past_session {
              title = "Patterns for the People - Kevlin Henney"
              date = "Tuesday, April 2nd. 2019"
              img = None
              video = Some "https://www.ustream.tv/embed/recorded/120901497"
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
    
//        Past_session {
//              title = "This could have been another first session"
//              date = "07.04.2019 - 19:00 GMT"
//              img = Some "https://secure.meetupstatic.com/photos/event/d/8/f/0/highres_479875536.jpeg"
//              video = None
//              description = "... but noone came and so we wept for a few years and stared into the abyss... waiting for the unspoke horrors to return from the dream land of Kadath."
//              links = List.empty }
    ]