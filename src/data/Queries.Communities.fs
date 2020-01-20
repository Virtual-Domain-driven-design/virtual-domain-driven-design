module VDDD.Data.Queries_communities

open VDDD.Types

let communities = 
    [
        {
              name = "DDD FR"
              country = "France"
              city = Some "Paris"
              url = "https://www.meetup.com/DDD-Paris/"
              img = "https://secure.meetupstatic.com/photos/event/8/8/0/9/600_476374825.jpeg"
        }
        {
              name = "DDD Budapest"
              country = "Hungary"
              city = Some "Budapest"
              url = "https://www.meetup.com/DDD-Practitioners-in-Budapest/"
              img = "https://secure.meetupstatic.com/photos/event/6/d/4/e/600_479247982.jpeg"
        }
        {
              name = "Domain Driven Design Nederland"
              country = "Netherlands"
              city = None
              url = "https://www.meetup.com/Domain-Driven-Design-Nederland/"
              img = "https://secure.meetupstatic.com/photos/event/b/8/b/5/600_448187285.jpeg"
        }
        {
              name = "Domain-Driven Design London"
              country = "United Kingdom"
              city = Some "London"
              url = "https://www.meetup.com/dddlondon/"
              img = "https://secure.meetupstatic.com/photos/event/7/e/a/6/600_483992422.jpeg"
        }
    ]
