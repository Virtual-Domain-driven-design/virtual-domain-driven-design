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

open App.Navigation
open App.CodeOfConduct
open App.Hero
open App.About
open App.Sessions
open App.Books
open App.Podcasts
open App.Organisers
open App.Sponsors
open App.Cfp
open App.Footer

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