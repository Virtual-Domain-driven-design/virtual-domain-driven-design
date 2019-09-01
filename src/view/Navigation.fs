namespace VDDD

module Navigation =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props
  open VDDD.Types

  let entry label onClick =
    div [ Class "px-2 py-4 text-lg leading-tight cursor-pointer flex-no-shrink rounded-lg hover:bg-grey-light hover:text-blue-darker"
          OnClick (fun e -> e.stopPropagation() ; onClick() ) ]
      [ label |> ofString ]    

  let links model dispatch =
    div [ Class "flex flex-col lg:flex-row items-stretch justify-end" ]
      [ entry "About" (fun _ -> GoTo (Landingpage "about") |> dispatch)
        entry "Sessions" (fun _ -> GoTo (Landingpage "sessions") |> dispatch)
        entry "CFP" (fun _ -> GoTo (Landingpage "cfp") |> dispatch)
        entry "Sponsors" (fun _ -> GoTo (Landingpage "sponsors") |> dispatch)
        entry "Organisers" (fun _ -> GoTo (Landingpage "organisers") |> dispatch)
        entry "Books" (fun _ -> GoTo Books |> dispatch)
        entry "Podcasts" (fun _ -> GoTo Podcasts |> dispatch)

        a [ Class "px-2 py-4 text-lg leading-tight cursor-pointer flex-no-shrink rounded-lg hover:bg-grey-light hover:text-blue-darker flex items-center justify-center"
            Href "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
            Target "_blank"]
          [ "Join the " |> ofString
            img [ Class "ml-2 h-6"
                  Src "./img/meetup.svg" ] ] ]


  let render (model:Model) dispatch =
    let visibility =
      match model.menu_open with
      | true -> "block"
      | false -> "hidden"
    
    div [ Class "navbar" ]
      [ div [ Class "lg:hidden navbar navbar-opaque " ]
          [ div [ Class "w-full flex flex-row items-center justify-between" ]
              [ div [ Class "p-4 font-bold text-lg cursor-pointer flex-no-shrink flex items-center justify-center rounded-lg hover:bg-grey-light hover:text-blue-darker"
                      OnClick (fun _ -> GoTo (Landingpage "top") |> dispatch)]
                    [ str "virtualDDD.com"]
                button [ Class "flex-no-shrink flex items-center m-4 px-3 py-2 border rounded border-white hover:text-blue-light hover:border-blue-light"
                         OnClick (fun e -> e.stopPropagation() ; Toggle_menu |> dispatch ) ]
                  [ svg [ Class "fill-current h-3 w-3" ; HTMLAttr.Custom ("viewBox", "0 0 20 20") ; HTMLAttr.Custom ("xmlns", "http://www.w3.org/2000/svg") ]
                      [ path [ HTMLAttr.Custom ("d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z") ]
                          [ ] ] ] ]
                  
            div [ Class (visibility + " bg-white w-full z-25") ]
              [ links model dispatch] ]  
              
        div [ Class ("navbar-permanent hidden lg:flex flex-row items-center justify-center navbar"); Id "navbar" ]
          [ div [ Class "w-4/5 xl:w-2/3 flex flex-col lg:flex-row items-center justify-between" ]
              [ div [ Class "p-4 font-bold text-lg cursor-pointer flex-no-shrink flex items-center justify-center rounded-lg hover:bg-grey-light hover:text-blue-darker"  
                      OnClick (fun _ -> GoTo (Landingpage "top") |> dispatch) ]
                    [ str "virtualDDD.com"]
                links model dispatch ] ] ]