namespace VDDD

module Sessions =

  open Fable.React
  open Fable.React.Props


  let session (s:Sessiondetails) =
    div [ Class "bg-white w-full rounded-lg shadow-md p-4 md:p-8 mb-2" ]
      [ div [ Class "font-bold" ]
          [ str s.title ]

        div [ Class "mb-2 text-gray-600 text-sm" ]
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
                  a [ Class "bg-gray-200 floating-action-button p-2 m-2"
                      Href l.url
                      Target "_blank"]
                    [ str l.label ] )) ] 
          

  let session_small s =
    match s.video with 
    | Some video -> 
        div [ Class "bg-white w-64 rounded-lg shadow-md p-2 m-1" ]
          [ div [ Class "text-sm text-gray-600"]
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


  let upcomming sessions = 
    match sessions 
          |> List.filter (function Past_session _ -> false | Upcoming_session _ -> true)
          |> List.map (function Past_session s -> s | Upcoming_session s -> s) with
    | s when s.Length > 0 -> Some s
    | _ -> None
      
  let past sessions = 
    match sessions 
          |> List.filter (function Past_session _ -> true | Upcoming_session _ -> false)
          |> List.map (function Past_session s -> s | Upcoming_session s -> s) with
    | s when s.Length > 0 -> Some s
    | _ -> None
      

  let render model dispatch =
    div [ Class "section" ; Id "sessions"]
      [ (match upcomming model.sessions with
          | None -> div [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
                      [ h2 [  ]
                              [ str "Upcoming Sessions"] 
                        div [ Class "flex flex-col items-center justify-start" ]
                          [
                            img [ Src "./img/no_upcoming.svg"
                                  Class "h-64 mb-6"]
                            div [ Class "" ] [ str "More sessions are coming to you eventually consistent..." ]
                            a [ Href "mailto:submissions@virtualddd.com"
                                Target "_blank"
                                Class "p-4 mt-6 bg-blue-400 floating-action-button text-white" ]
                              [ str "Propose a session"]
                          ] ]
          | Some s -> div [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
                        [ h2 [ ]
                                [ str "Upcoming Sessions"]
                          div [ Class "flex flex-col items-center justify-start" ]
                            (s |> List.map session)
                            ])
        (match past model.sessions with
          | None -> div [] []
          | Some s -> div [ Class "w-full flex flex-col items-center justify-start"]
                        [ h2 [ Class "my-6 w-4/5 lg:w-2/3 xl:w-1/2" ]
                            [ str "Past Sessions"]
                          div [ Class "w-11/12 md:w-5/6" ]
                            [ div [ Class "flex items-stretch justify-center flex-wrap" ]
                                (s |> List.map session_small)
                            ] ] )
      ]  