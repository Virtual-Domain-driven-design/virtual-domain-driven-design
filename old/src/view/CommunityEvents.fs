namespace VDDD

module CommunityEvents =

  open Fable.React
  open Fable.React.Props
  
  let podcast dispatch (s:Sessiondetails) =
      match s.podcast with
      | Some src ->
          div [ Class "bg-white w-full h-24 rounded-lg shadow-md" ]
            [ div [ Class "videoframe" ]
                   [
                     iframe [ Class "videostream"
                              AllowFullScreen true
                              Src src
                              Scrolling "no"
                              FrameBorder 0 ]
                       [ ] ] ]
      | None -> div [] []

  let render model dispatch =
    div [ Class "section" ; Id "community_events"]
         [ div [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2 flex flex-col items-center justify-start"]
              [ h2 [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
                  [ str "Community Events"]                  
                div [ Class "my-8 w-4/5 lg:w-2/3" ]
                    [ div [ Class "flex items-stretch justify-center flex-wrap" ]
                        (model.sessions
                          |> List.filter (function Past_session _ -> true | Upcoming_session _ -> false)
                          |> List.map (function Past_session s -> (podcast dispatch s) | Upcoming_session s -> (podcast dispatch s) ))
                    ]
               ]
              ]
          
              
         
        