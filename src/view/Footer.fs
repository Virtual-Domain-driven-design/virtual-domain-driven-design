module App.Footer

open Fable.Helpers.React
open Fable.Helpers.React.Props
open App.Types


let footer model dispatch =
  div [ Class "footer bg-grey-lighter" ]
    [ div [ ] [ str "Copyright © Virtual Domain-Driven Design"]
      
      div [ ] [ str "Developed by Kenny Baas-Schwegler & Marco Heimeshoff "]
      
      div [ Class "link p-2"
            OnClick (fun e -> e.stopPropagation() ; GoTo Code_of_conduct |> dispatch) ]
        [ str "Code of Conduct" ] ]  
