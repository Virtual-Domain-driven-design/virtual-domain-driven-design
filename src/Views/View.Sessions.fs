module App.Views.Sessions

open Fable.Helpers.React
open Fable.Helpers.React.Props


let sessions model dispatch =
  div [ Class "content bg-grey-lighter" ; Id "sessions"]
    [ div [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
        [ h2 [ ]
                [ str "Sessions"]
          div [ Class "flex flex-col items-center justify-start" ]
            [
              
              div [ Class "bg-white w-full rounded-lg shadow-lg p-2 md:p-8" ]
                [ 
                  div [ Class "font-bold my-2" ]
                    [ str "Live stream of Kevlin Henney's talk @DDD Budapest Meetup" ]
                  div [ Class "" ]
                    [ img [ Class "w-64 textwrap pr-2"
                            Src "https://secure.meetupstatic.com/photos/event/d/8/f/0/highres_479875536.jpeg" ]
                      str "Have you thought about that maybe all you know about patterns is just misconceptions?
                           In this talk, Kevlin will take us to an alternative tour of patterns, one that is based on improving the habitability of code, communication, exploration, empiricism, reasoning, incremental development, sharing design and bridging rather than barricading different levels of expertise.
                           Apparently, everyone knows about patterns. Except for those who don't. Which is basically all the people who've never come across patterns... plus many of the people who have." 
                       ]
                  div [ Class "mt-4 pt-2 border-t border-solid" ]
                    [ a [ Class "link"
                          Href "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/260116772/"
                          Target "_blank"]
                        [ str "Go to the event" ] ] ]  ] ] ]