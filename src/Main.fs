module Main

open Elmish
open Elmish.React
open Elmish.Browser.UrlParser
open Elmish.Browser.Navigation
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
open App.Views.Books
open App.Views.Podcasts
open App.Views.Organisers
open App.Views.Sponsors
open App.Views.Cfp
open App.Views.Footer

open Router

importAll "./style.css"

let init result  =
  let (model, cmd) = urlUpdate result { menu_open = false ; page = Landingpage ; sessions = Queries.sessions ; books = Queries_books.books }
  model, Cmd.none

let update (msg:Msg) (model:Model) =
  match msg with
  | Toggle_menu ->
      { model with menu_open = not model.menu_open }, Cmd.none
      
  | GoTo p ->
      { model with page = p ; menu_open = false }, 
        Cmd.batch 
          [ Navigation.modifyUrl (toPage p)
            Cmd.attemptFunc scrollIntoView "top" OnLogError ]

  | ScrollTo s ->
      { model with
            page = Landingpage
            menu_open = false } , Cmd.attemptFunc scrollIntoView s OnLogError
      
  | OnLogError e ->
      model, Cmd.none
      
  | Clicked_Anywhere ->
      { model with menu_open = false }, Cmd.none

let landingpage model dispatch =
  div []
    [ hero model dispatch
      about model dispatch
      sessions model dispatch
      cfp model dispatch
      sponsors model dispatch
      organisers model dispatch 
    ]


let view (model:Model) dispatch =
  div [ Class "font-sans"; Id "top"
        OnClick (fun _ -> Clicked_Anywhere |> dispatch )]    
    [ navbar model dispatch
      
      div [ ]
        [ (match model.page with
          | Landingpage -> landingpage model dispatch
          | Code_of_conduct -> codeofconduct model dispatch 
          | Books -> books model dispatch
          | Podcasts -> podcasts model dispatch
        )]
        
      footer model dispatch ]



Program.mkProgram init update view
|> Program.toNavigable (parsePath pageParser) urlUpdate
|> Program.withReact "elmish-app"
#if DEBUG
|> Program.withConsoleTrace
#endif
|> Program.run