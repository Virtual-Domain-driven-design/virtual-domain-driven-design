module App.View_Footer

open Fable.Helpers.React
open Fable.Helpers.React.Props
open App.Types


let footer model dispatch =
  div [ Class "footer" ]
    [  div [ Class "mt-4" ] [ str "Copyright © Virtual Domain-Driven Design"] ]  
