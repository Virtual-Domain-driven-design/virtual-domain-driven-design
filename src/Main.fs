module Main

open Elmish
open Elmish.React
open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fable.Core.JsInterop
open App.Types
open App.Interop
open App.Data
open App.Views

open App.Views.Navigation
open App.Views.CodeOfConduct
open App.Views.Hero
open App.Views.About
open App.Views.Sessions
open Organisers
open Sponsors
open Cfp
open App.Views.Footer

importAll "./style.css"

let init() = 
  { menu_open = false
    view = Landingpage
    sessions = Queries.sessions
  }, Cmd.none


let update (msg:Msg) (model:Model) =
  match msg with
  | Toggle_menu ->
      { model with menu_open = not model.menu_open }, Cmd.none
      
  | Show p ->
      { model with view = p ; menu_open = false }, Cmd.attemptFunc scrollIntoView "top" OnLogError
      
  | ScrollTo s ->
      { model with
            view = Landingpage
            menu_open = false } , Cmd.attemptFunc scrollIntoView s OnLogError
      
  | OnLogError e ->
      model, Cmd.none
      
  | Clicked_Anywhere ->
      { model with menu_open = false }, Cmd.none


let landingpage model dispatch =
  div []
    [ hero model dispatch
      about model dispatch
      sessions model dispatch ]


let view (model:Model) dispatch =
        
  div [ Class "font-sans"; Id "top"
        OnClick (fun _ -> Clicked_Anywhere |> dispatch )]    
    [ navbar model dispatch
      
      div [ ]
        [ (match model.view with
          | Landingpage -> landingpage model dispatch
          | Code_of_conduct -> codeofconduct model dispatch )]

      cfp model dispatch
      
      sponsors model dispatch

      organisers model dispatch
      
      footer model dispatch ]



Program.mkProgram init update view
|> Program.withReact "elmish-app"
#if DEBUG
|> Program.withConsoleTrace
#endif
|> Program.run