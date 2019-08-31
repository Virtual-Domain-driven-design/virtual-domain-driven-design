namespace VDDD

module Podcasts =

  open VDDD
  open Fable.Helpers.React
  open Fable.Helpers.React.Props

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

  let podcasts model dispatch =
    div [ Class "content" ; Id "podcasts"]
         [ div [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2 flex flex-col items-center justify-start"]
              [ h2 [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
                  [ str "Podcasts"]
                div [  ]
                    [ p [ Class "italic text-justify" ]
                        [ str "Below you can find all our podcasts listed. However you can also listen to them on the following platforms:" ]
                      div [Class "flex items-stretch justify-center flex-wrap"]
                          [
                              a [ Href "https://open.spotify.com/show/7vYfWVbOjnQupUDgFuEqac"
                                  Target "_blank"
                                  Class "nav-item " ]
                                [ img [
                                     Class "ml-2 h-6"
                                     Src "./img/spotify.png"
                                   ]
                                  str "Spotify"
                                   ]
                              a [ Href "https://podcasts.google.com/?feed=aHR0cHM6Ly92aXJ0dWFsZGRkLmxpYnN5bi5jb20vcnNz"
                                  Target "_blank"
                                  Class "nav-item " ]
                                [ img [
                                     Class "ml-2 h-6"
                                     Src "./img/google_podcast.png"
                                   ]
                                  str "Google Podcasts"
                                   ]
                              a [ Href "https://virtualddd.libsyn.com/rss"
                                  Target "_blank"
                                  Class "nav-item " ]
                                [ img [
                                     Class "ml-2 h-6"
                                     Src "./img/rss.png"
                                   ]
                                  str "RSS feed"
                                   ]
                           ]
                    ]
                    
                div [ Class "my-8 w-4/5 lg:w-2/3" ]
                    [ div [ Class "flex items-stretch justify-center flex-wrap" ]
                        (model.sessions
                          |> List.filter (function Past_session _ -> true | Upcoming_session _ -> false)
                          |> List.map (function Past_session s -> (podcast dispatch s) | Upcoming_session s -> (podcast dispatch s) ))
                    ]
               ]
              ]
          
              
         
        