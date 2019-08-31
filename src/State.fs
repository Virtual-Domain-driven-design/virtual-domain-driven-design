namespace VDDD

module State =

    open Elmish
    open Elmish.Browser.Navigation

    open VDDD
    open VDDD.Data
    open Router

    open Interop

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
