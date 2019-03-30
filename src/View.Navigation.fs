module App.View_Navigation

open App.Types
open Fable.Helpers.React
open Fable.Helpers.React.Props


let links model dispatch =
  div [ Class "flex flex-col md:flex-row items-stretch justify-end" ]
    [
      a [ Class "nav-item"
          Href "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
          Target "_blank"]
        [ str "Join the meetup" ]

      div [ Class "nav-item"
            OnClick (fun e -> e.stopPropagation() ; Show Code_of_conduct |> dispatch) ]
        [ str "Code of Conduct" ] ]


let navbar (model:Model) dispatch =
  let visibility =
    match model.menu_open with
    | true -> "block"
    | false -> "hidden"
  
  div [ Class "navbar" ]
    [ div [ Class "md:hidden navbar navbar-opaque " ]
        [ div [ Class "w-full flex flex-row items-center justify-between" ]
            [ div [ Class "nav-item"
                    OnClick (fun _ -> Show Landingpage |> dispatch)]
                  [ str "virtualDDD.com"]
              button [ Class "flex-no-shrink flex items-center m-4 px-3 py-2 border rounded border-white hover:text-blue-lightest hover:border-blue-lightest"
                       OnClick (fun e -> e.stopPropagation() ; Toggle_menu |> dispatch ) ]
                [ svg [ Class "fill-current h-3 w-3" ; HTMLAttr.Custom ("viewBox", "0 0 20 20") ; HTMLAttr.Custom ("xmlns", "http://www.w3.org/2000/svg") ]
                    [ path [ HTMLAttr.Custom ("d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z") ]
                        [ ] ] ] ]
                
          div [ Class (visibility + " bg-grey-dark text-white w-full z-25") ]
            [ links model dispatch] ]  
            
      div [ Class ("navbar-permanent hidden md:flex flex-row items-center justify-center navbar"); Id "navbar" ]
        [ div [ Class "w-2/3 flex flex-col md:flex-row items-center justify-between" ]
            [ div [ Class "nav-item "  
                    OnClick (fun _ -> Show Landingpage |> dispatch) ]
                  [ str "virtualDDD.com"]
              links model dispatch ] ] ]