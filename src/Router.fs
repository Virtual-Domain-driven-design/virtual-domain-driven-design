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
        UrlParser.map Sessions (s "sessions")
        UrlParser.map DDDDD (s "conference")
        UrlParser.map Books (s "books")
        UrlParser.map Videos (s "videos")
        UrlParser.map Communities (s "communities")
        UrlParser.map Podcasts (s "podcasts")
    ]
    
let toPage = function
    | Landingpage _ -> "/home"
    | Code_of_conduct -> "/codeofconduct"
    | Sessions -> "/sessions"
    | DDDDD -> "/conference"
    | Books -> "/books"
    | Videos -> "/videos"
    | Communities -> "/communities"
    | Podcasts -> "/podcasts"


let urlUpdate (result: Option<Page>) model =
    match result with
    | None ->
        model, Navigation.modifyUrl (toPage model.page)
    | Some page -> 
        { model with page = page }, Cmd.none 
            