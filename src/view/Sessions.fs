namespace VDDD

module Sessions =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props
  open VDDD


  let session dispatch (s:Sessiondetails) =
    div [ Class "bg-white w-full rounded-lg shadow-md p-2 md:p-8 mt-6" ]
      [ div [ Class "font-bold" ]
          [ str s.title ]

        div [ Class "mb-2 text-grey-dark text-sm" ]
          [ str s.date ]

        (match s.img with
        | Some pic ->
              img [ Class "w-full"
                    Src pic ]
        | None -> div [] [] )

        (match s.video with
        | Some stream ->
             div [ Class "videoframe" ]
               [ iframe [ Class "videostream"
                          AllowFullScreen true
                          Src stream
                          Scrolling "no"
                          FrameBorder 0 ]
                   [ ] ]
         | None -> div [] [])  
        
        div [ Class "py-2 text-justify" ]
          [ str s.description ]

        (match s.embedded with
        | Some content ->
             div [ Class "videoframe" ]
               [ iframe [ Class "videostream"
                          AllowFullScreen true
                          Src content
                          Scrolling "no"
                          FrameBorder 0 ]
                   [ ] ]
         | None -> div [] [])  
            
        div [ Class "mt-4 pt-2 border-t border-solid flex items-center justify-start flex-wrap" ]
          (s.links
          |> List.map (fun l ->
                  a [ Class "bg-grey-lighter card-hoverable p-2 m-2"
                      Href l.url
                      Target "_blank"]
                    [ str l.label ] )) ] 
          

  let session_small dispatch s =
    match s.video with 
    | Some video -> 
        div [ Class "bg-white w-64 card-hoverable shadow-md p-4 m-2" ]
          [ div [ Class "text-sm text-grey-dark"]
              [ str s.date ]

            div [ Class "videoframe" ]
             [ iframe [ Class "videostream"
                        AllowFullScreen true
                        Src video
                        Scrolling "no"
                        FrameBorder 0 ]
                 [ ] ]
            
            a [ Class "text-sm text-left font-bold link"
                Href video
                Target "_blank"]
              [ str s.title ] ]

    | None -> div [] []

  let sessions model dispatch =
    div [ Class "content bg-grey-lighter" ; Id "sessions"]
      [ (match model.sessions
          |> List.filter (function Past_session _ -> false | Upcoming_session _ -> true)
          |> List.length with
          | 0 -> div [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
                    [ h2 [  ]
                            [ str "Upcoming Sessions"] 
                      div [ Class "flex flex-col items-center justify-start" ]
                        [
                          img [ Src "./img/no_upcoming.svg"
                                Class "h-64 mb-6"]
                          div [ Class "" ] [ str "More sessions are coming to you eventually consistent..." ]
                          a [ Href "mailto:submissions@virtualddd.com"
                              Target "_blank"
                              Class "p-4 mt-6 bg-blue-light card-hoverable text-white" ]
                            [ str "Propose a session"]
                        ] ]
          | _ -> div [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
                    [ h2 [ ]
                            [ str "Upcoming Sessions"]
                      div [ Class "flex flex-col items-center justify-start" ]
                        (model.sessions
                        |> List.filter (function Past_session _ -> false | Upcoming_session _ -> true)
                        |> List.map (function Past_session s -> (session dispatch s) | Upcoming_session s -> (session dispatch s) ))
                        ])
        (match model.sessions
          |> List.filter (function Past_session _ -> true | Upcoming_session _ -> false)
          |> List.length with
          | 0 -> div [] []
          | _ -> div [ Class "w-full flex flex-col items-center justify-start"]
                  [ h2 [ Class "my-6 w-4/5 lg:w-2/3 xl:w-1/2" ]
                      [ str "Past Sessions"]
                    div [ Class "w-11/12 md:w-5/6" ]
                      [ div [ Class "flex items-stretch justify-center flex-wrap" ]
                          (model.sessions
                          |> List.filter (function Past_session _ -> true | Upcoming_session _ -> false)
                          |> List.map (function Past_session s -> (session_small dispatch s) | Upcoming_session s -> (session dispatch s) ))
                          ]
                      ]
                  )
        ]  