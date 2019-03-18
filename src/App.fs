module App

open Elmish
open Elmish.React
open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fable.Core.JsInterop
open Fable.Import.Browser
open App.Types
open App.Interop
open App.View_Navigation
open App.View_CodeOfConduct
open App.View_Footer


importAll "./style.css"

let init() = 
  { menu_open = false
    menu_transparent = true;
    view = Landingpage
  }, Cmd.none



let update (msg:Msg) (model:Model) =
  match msg with
  | Toggle_menu ->
      { model with menu_open = not model.menu_open }, Cmd.none
      
  | Show p ->
      { model with view = p ; menu_open = false }, Cmd.attemptFunc scrollIntoView "top" OnLogError
      
  | ScrollTo s ->
      { model with menu_open = false } , Cmd.attemptFunc scrollIntoView s OnLogError
      
  | OnLogError e ->
      model, Cmd.none
      
  | Scrollposition p ->
      { model with menu_transparent = (p < 20.0 && model.view = Landingpage ) }, Cmd.none
  
  | Clicked_Anywhere ->
      { model with menu_open = false }, Cmd.none



let onScroll initial =
    let sub dispatch =
        window.addEventListener_scroll(fun e -> dispatch (Scrollposition window.document.documentElement.scrollTop) )
    Cmd.ofSub sub


      
let landingpage model dispatch =
  div [ ]
    [ div [ Class "hero"
            Style [ Background "url(./img/kandddinsky.jpg)"
                    BackgroundSize "cover"
                    BackgroundPosition "center" ] ]
        [ div [ Class "overlay" ] []
          
          div [ Class "hero-content" ]
            [
              div [ Class "h-64"] []
              div [ Class "hero-text sm:text-3xl md:text-4xl xl:text-5xl w-full sm:w-3/4 mt-8 flex flex-col items-center justify-center" ]
                [ div [ Class "font-black" ]
                   [ str "Virtual Domain-Driven Design" ]
                  
                  div [ Class "text-xl font-medium" ] 
                    [ str "An online Domain-Driven Design meetup and conference." ] ] 
              div [ Class "h-64"] []   ] ] ]
    


let view (model:Model) dispatch =
  let content =

    match model.view with
    | Landingpage -> landingpage model dispatch
    | Code_of_conduct -> codeofconduct model dispatch

  div [ Class "font-sans"; Id "top"
        OnClick (fun _ -> Clicked_Anywhere |> dispatch )]    
    [ navbar model dispatch
        
      content
      
      footer model dispatch ]



Program.mkProgram init update view
|> Program.withSubscription onScroll
|> Program.withReact "elmish-app"
#if DEBUG
|> Program.withConsoleTrace
#endif
|> Program.run