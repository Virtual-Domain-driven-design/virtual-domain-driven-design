namespace VDDD

module Hero =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props
  open VDDD.Types

  let render model dispatch =
      div [ Class "hero flex flex-col items-center justify-center lg:flex-row-reverse lg:items-start"
            Style [ Background "url(./img/kandddinsky.jpg)"
                    BackgroundSize "cover"
                    BackgroundPosition "center" ] ]
        [ div [ Class "overlay" ] []

          div [ Class "w-full lg:w-1/3 flex flex-col items-center justify-center" ]
            [
              div [ Class "w-full p-4 sm:mt-8 sm:w-5/6 sm:rounded-lg sm:shadow-lg bg-white z-10 flex flex-col items-center justify-start"]
                [
                  img [ Class "hidden lg:block object-contain h-8 mb-4"
                        Src "./img/vddd_logo_tp.png" ]
                  div [ Class "mb-4 text-justify" ]
                    [ "A community driven meetup for people who want to get more in-depth knowledge of DDD from anywhere at anytime, join this virtual DDD community for online panel discussions, community talks and more. Everybody is welcome to join us, we love learning and growing together." |> ofString ]
                  div [ Class "mb-4 font-semibold" ]
                    [ "Share your deep, creative, productive or crazy ideas!" |> ofString ]
                  a [ Href "mailto:submissions@virtualddd.com"
                      Target "_blank"
                      Class "p-4 bg-blue-500 card-hoverable text-white" ]
                    [ str "Propose a session"]                      
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
                        div [ Class "card-hoverable bg-white text-center cursor-pointer p-2 w-40 my-4"
                              OnClick (fun _ -> GoTo Sessions |> dispatch) ]
                          [ "Show all sessions" |> ofString ]
                      ]
                | None -> div [] []  )
            ]
        ]