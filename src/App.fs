module App

open Elmish
open Elmish.React
open Elmish.Browser.UrlParser
open Elmish.Browser.Navigation
open Fable.Core.JsInterop

open VDDD
open Router

importAll "./style.css"

Program.mkProgram State.init State.update View.render
|> Program.toNavigable (parsePath pageParser) urlUpdate
|> Program.withReact "elmish-app"
#if DEBUG
|> Program.withConsoleTrace
#endif
|> Program.run