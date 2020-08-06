namespace VDDD

module App =

  open Elmish
  open Elmish.React
  open Browser.Dom
  open Elmish.HMR
 

  Program.mkProgram State.init State.update View.render
  |> Program.withReactBatched "elmish-app"
  #if DEBUG
  |> Program.withConsoleTrace
  #endif
  |> Program.run