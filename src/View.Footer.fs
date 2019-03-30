module App.View_Footer

open Fable.Helpers.React
open Fable.Helpers.React.Props
open App.Types


let footer model dispatch =
  div [ Class "footer" ]
    [ div [ ]
        [ str "Copyright © Virtual Domain-Driven Design"]
      div [ ]
        [ str "Developed by Kenny Baas-Schwegler & Marco Heimeshoff "] ]  
