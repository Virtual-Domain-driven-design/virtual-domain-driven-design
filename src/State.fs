namespace VDDD

module State =

    open Elmish
    open Elmish.Browser.Navigation

    open VDDD.Types
    open VDDD.Data
    open Router

    open Interop

    let init result  =
      let (model, cmd) = 
        urlUpdate result 
          { menu_open = false 
            page = (Landingpage "top") 
            searchterm = ""
            sessions = Queries.sessions 
            books = Queries_books.books
            communityEvents = Queries_community_events.communityEvents}
      model, Cmd.none

    let update (msg:Msg) (model:Model) =
      match msg with
      | Toggle_menu ->
          { model with menu_open = not model.menu_open }, 
            Cmd.none
          
      | GoTo targetpage ->
          let cmd =
            match model.page, targetpage with
            | Landingpage s,Landingpage d -> Cmd.attemptFunc scrollIntoView d OnLogError
            | _ -> Cmd.batch [ Navigation.modifyUrl (toPage targetpage) ]
             
          { model with page = targetpage ; menu_open = false }, 
            cmd 

      | OnLogError e ->
          model, 
          Cmd.none
          
      | Clicked_Anywhere ->
          { model with menu_open = false }, 
            Cmd.none
