namespace VDDD

module Hero =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props
  open VDDD.Types


  let social_link label url =
    a [ Class "text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400" 
        Href url 
        Target "_blank" ] 
      [ label |> ofString ]
 

  let render model dispatch =
      div [ Class "hero flex flex-col items-center justify-center lg:flex-row-reverse lg:items-start"
            Style [ Background "url(./img/kandddinsky.jpg)"
                    BackgroundSize "cover"
                    BackgroundPosition "center" ] ]
        [ div [ Class "overlay" ] []

          div [ Class "w-full lg:w-1/3 flex flex-col items-center justify-center z-10" ]
            [
              div [ Class "w-full p-4 sm:mt-8 sm:w-5/6 sm:rounded-lg sm:shadow-lg bg-white  flex flex-col items-center justify-start"]
                [
                  img [ Class "hidden lg:block object-contain h-8 mb-4"
                        Src "./img/vddd_logo_tp.png" ]
                  div [ Class "mb-4 text-justify" ]
                    [ "A community driven meetup for people who want to get more in-depth knowledge of DDD from anywhere at anytime, join this virtual DDD community for online panel discussions, community talks and more. Everybody is welcome to join us, we love learning and growing together." |> ofString ]
                  div [ Class "mb-4 font-semibold" ]
                    [ "Share your deep, creative, productive or crazy ideas!" |> ofString ]
                  a [ Href "mailto:submissions@virtualddd.com"
                      Target "_blank"
                      Class "p-4 bg-blue-500 floating-action-button text-white" ]
                    [ str "Propose a session"]                      
                ]
              div [ Class "mt-4 flex items-center justify-center" ]
                [
                  social_link "Meetup" "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
                  social_link "Slack" "https://t.co/MRxpx0rLH2?amp=1"
                  social_link "Twitter" "https://twitter.com/VirtualDDD"
                ]
            ]

          div [ Class "w-full mt-8 lg:w-2/3  flex flex-col items-center justify-center" ]
            [
              ( match Sessions.upcomming model.sessions with
                | Some s -> 
                    div [ Class "w-5/6 z-10 flex flex-col items-center" ] 
                      [
                        Sessions.session s.Head
                        div [ Class "w-full hidden md:flex items-stretch justify-start my-2 "] 
                          ( s.Tail 
                            |> List.truncate 3
                            |> List.map Sessions.session_small )
                        div [ Class "text-xl mb-4 p-2 cursor-pointer text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
                              OnClick (fun _ -> GoTo Sessions |> dispatch) ]
                          [ "Show all sessions" |> ofString ]
                      ]
                | None -> div [] []  )
            ]
        ]