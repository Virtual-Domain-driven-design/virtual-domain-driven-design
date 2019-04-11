module App.Data.Queries

open System
open App.Types

let sessions =
    [
        Past_session {
              title = "Live stream of Kevlin Henney's talk @DDD Budapest Meetup"
              date = DateTime.Now
              img = Some "https://secure.meetupstatic.com/photos/event/d/8/f/0/highres_479875536.jpeg"
              description = "Have you thought about that maybe all you know about patterns is just misconceptions?
                   In this talk, Kevlin will take us to an alternative tour of patterns, one that is based on improving the habitability of code, communication, exploration, empiricism, reasoning, incremental development, sharing design and bridging rather than barricading different levels of expertise.
                   Apparently, everyone knows about patterns. Except for those who don't. Which is basically all the people who've never come across patterns... plus many of the people who have."
              link = Some { label = "Go to the event" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/260116772/" } }
    ]