namespace VDDD

module Routing =

  open Feliz.Router

  let link_to = function
    | Landingpage _ -> (Router.format "home")
    | Code_of_conduct -> (Router.format "codeofconduct")
    | Sessions -> (Router.format "sessions")
    | DDDDD -> (Router.format "conference")
    | Books -> (Router.format "books")
    | Videos -> (Router.format "videos")
    | Communities -> (Router.format "communities")
    | Podcasts -> (Router.format "podcasts")

 
  let parseUrl = function
    | [] -> Landingpage "top"
    | [ "home" ] -> Landingpage "top"
    | [ "codeofconduct" ] -> Code_of_conduct
    | [ "sessions" ] -> Sessions
    | [ "conference" ] -> DDDDD
    | [ "books" ] -> Books
    | [ "videos" ] -> Videos
    | [ "communities" ] -> Communities
    | [ "podcasts" ] -> Podcasts