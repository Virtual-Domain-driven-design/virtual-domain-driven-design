namespace VDDD

module View =

    open Fable.Helpers.React
    open Fable.Helpers.React.Props
    open VDDD.Types
    open Interop

    let landingpage model dispatch =
      let hash =
        ( match model.page with 
          | Landingpage h -> h 
          | _ -> "top") 
      div [ OnLoad (fun _ -> scrollIntoView hash) ]
        [ Hero.render model dispatch
          Communities.render model dispatch
          Sponsors.render model dispatch
          Organisers.render model dispatch 
        ]


    let render (model:Model) dispatch =
      div [ Class "font-sans"; Id "top"
            OnClick (fun _ -> Clicked_Anywhere |> dispatch )]    
        [ Navigation.render model dispatch
          
          div [ ]
            [ (match model.page with
              | Landingpage _ -> landingpage model dispatch
              | Sessions -> Sessions.render model dispatch 
              | Code_of_conduct -> CodeOfConduct.render model dispatch 
              | Books -> Books.render model dispatch
              | Videos -> Videos.render model dispatch
              | Communities -> Communities.render model dispatch
              | Podcasts -> Podcasts.render model dispatch
            )]
            
          Footer.render model dispatch ]