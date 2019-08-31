namespace VDDD

module View =

    open Fable.Helpers.React
    open Fable.Helpers.React.Props

    let landingpage model dispatch =
      div []
        [ Hero.render model dispatch
          About.render model dispatch
          Sessions.render model dispatch
          Cfp.render model dispatch
          Sponsors.render model dispatch
          Organisers.render model dispatch 
        ]


    let render (model:Model) dispatch =
      div [ Class "font-sans"; Id "top"
            OnClick (fun _ -> Clicked_Anywhere |> dispatch )]    
        [ Navigation.render model dispatch
          
          div [ ]
            [ (match model.page with
              | Landingpage -> landingpage model dispatch
              | Code_of_conduct -> CodeOfConduct.render model dispatch 
              | Books -> Books.render model dispatch
              | Podcasts -> Podcasts.render model dispatch
            )]
            
          Footer.render model dispatch ]