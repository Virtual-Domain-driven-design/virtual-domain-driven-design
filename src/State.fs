namespace VDDD

module State =

    open Elmish

    let init result  =
      { menu_open = false 
        page = (Landingpage "top") 
        searchterm = ""
        sessions = Data.Sessions.sessions
        books = Data.Books.books
        communities = Data.Communities.communities
        videos = Data.Videos.kandddinsky }, Cmd.none

    let update (msg:Msg) (model:Model) =
      match msg with
      | Toggle_menu ->
          { model with menu_open = not model.menu_open }, 
            Cmd.none
          
      | Page_changed targetpage -> 
          { model with page = targetpage ; menu_open = false }, 
            Cmd.none

      | OnLogError e ->
          model, 
          Cmd.none
          
      | Clicked_Anywhere ->
          { model with menu_open = false }, 
            Cmd.none
