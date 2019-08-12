module Router

open Elmish
open Elmish.Browser
open Elmish.Browser.UrlParser
open Elmish.Browser.Navigation

open App.Types

let pageParser : Parser<Page->Page,Page> =
    oneOf [
        UrlParser.map Landingpage (s "home") 
        UrlParser.map Code_of_conduct (s "codeofconduct")
        UrlParser.map Books (s "books")
    ]
    
let toPage = function
    | Landingpage -> "/home"
    | Code_of_conduct -> "/codeofconduct"
    | Books -> "/books"


let urlUpdate (result: Option<Page>) model =
    match result with
    | None ->
        model, Navigation.modifyUrl (toPage model.page)
    | Some page ->
        { model with page = page }, Cmd.none
