module App.Hero

open Fable.Helpers.React
open Fable.Helpers.React.Props


let hero model dispatch =
    div [ Class "hero"
          Style [ Background "url(./img/kandddinsky.jpg)"
                  BackgroundSize "cover"
                  BackgroundPosition "center" ] ]
      [ div [ Class "overlay" ] []
        div [ Class "hero-content" ]
          [ div [ Class "h-64"] []
            div [ Class "hero-text w-full sm:w-3/4 mt-8 flex flex-col items-center justify-center" ]
              [ div [ Class "hero-title" ]
                 [ str "Virtual Domain-Driven Design" ]                  
                div [ Class "hero-subtitle" ] 
                  [ str "An online Domain-Driven Design meetup and conference." ] ] 
            div [ Class "h-64"] []   ] ] 