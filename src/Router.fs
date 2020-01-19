module Router

open Elmish
open Elmish.Browser
open Elmish.Browser.UrlParser
open Elmish.Browser.Navigation
open VDDD.Types

let pageParser : Parser<Page->Page,Page> =
    oneOf [
        UrlParser.map (Landingpage "top") (s "home") 
        UrlParser.map Code_of_conduct (s "codeofconduct")
        UrlParser.map Books (s "books")
        UrlParser.map Communities (s "communities")
        UrlParser.map Conferences (s "conference")
        UrlParser.map Podcasts (s "podcasts")
    ]
    
let toPage = function
    | Landingpage _ -> "/home"
    | Code_of_conduct -> "/codeofconduct"
    | Books -> "/books"
    | Communities -> "/communities"
    | Conferences -> "/conferences"
    | Podcasts -> "/podcasts"


let urlUpdate (result: Option<Page>) model =
    match result with
    | None ->
        model, Navigation.modifyUrl (toPage model.page)
    | Some page -> 
        { model with page = page }, Cmd.none 
            