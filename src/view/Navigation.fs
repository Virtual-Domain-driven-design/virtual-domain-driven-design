namespace VDDD

module Navigation =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props
  open VDDD.Types

  let vddd_logo dispatch = 
    div [ Class "p-4 cursor-pointer flex-shrink-0 flex items-center justify-center rounded-lg hover:bg-gray-400"  
          OnClick (fun _ -> GoTo (Landingpage "top") |> dispatch) ]
      [ img [ Class "object-contain mr-2 h-8"
              Src "./img/vddd_logo_tp.png" ] ]  

  let links render_entry render_submenu dispatch =
    div [ Class "flex flex-col lg:flex-row items-start lg:items-stretch justify-end" ]
      [ render_entry "Sessions" (fun _ -> GoTo (Landingpage "sessions") |> dispatch)
        render_entry "CFP" (fun _ -> GoTo (Landingpage "cfp") |> dispatch)
        render_entry "Sponsors" (fun _ -> GoTo (Landingpage "sponsors") |> dispatch)
        render_entry "About" (fun _ -> GoTo (Landingpage "about") |> dispatch)
        render_submenu "Resources"
          [ render_entry "Books" (fun _ -> GoTo Books |> dispatch)
            a [ Class "p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center "
                Href "https://dddheuristics.com"
                Target "_blank"]
              [ str "DDD Heuristics" ]
            render_entry "Podcasts" (fun _ -> GoTo Podcasts |> dispatch) ]
        render_submenu "Social" 
          [ a [ Class "p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center "
                Href "https://t.co/MRxpx0rLH2?amp=1"
                Target "_blank"]
              [ img [ Class "mr-2 h-6"
                      Src "./img/slack_icon.png" ] 
                div [ Class "pt-1"] ["Slack " |> ofString ]
              ]
            a [ Class "p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
                Href "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
                Target "_blank"]
              [ img [ Class "ml-2 h-6"
                      Src "./img/meetup.svg" ] ] ] ]


  let entry_mobile label onClick =
    div [ Class "w-full p-4 text-lg leading-tight cursor-pointer flex-shrink-0 hover:bg-gray-400 hover:text-blue-700"
          OnClick (fun e -> e.stopPropagation() ; onClick() ) ]
      [ label |> ofString ]    

  let submenu_mobile label content =
    div [ Class "relative border-t border-gray-400 w-full" ]
      [ div [ Class "absolute top-0 right-0 text-gray-500 pt-2 pr-4 text-md" ]
          [ label |> ofString ]
        div [ ]
          content ]

  let mobile_links model dispatch =
    let visibility =
      match model.menu_open with
      | true -> "block"
      | false -> "hidden"
    div [ Class (visibility + " bg-white w-full z-25 shadow-md") ]
      [ links entry_mobile submenu_mobile dispatch]   

  let navbar_mobile dispatch = 
    div [ Class "w-full flex flex-row items-center justify-between shadow-md" ]
      [ div [ Class "p-4 font-bold text-lg cursor-pointer flex-shrink-0 flex items-center justify-center rounded-lg hover:bg-gray-400 hover:text-blue-700"
              OnClick (fun _ -> GoTo (Landingpage "top") |> dispatch)]
            [ img [ Class "object-contain mr-2 h-8"
                    Src "./img/vddd_logo_tp.png" ] ]
        button [ Class "flex-shrink-0 flex items-center m-4 px-3 py-2 border rounded border-white hover:text-blue-400 hover:border-blue-400"
                 OnClick (fun e -> e.stopPropagation() ; Toggle_menu |> dispatch ) ]
          [ svg [ Class "fill-current h-3 w-3" ; HTMLAttr.Custom ("viewBox", "0 0 20 20") ; HTMLAttr.Custom ("xmlns", "http://www.w3.org/2000/svg") ]
              [ path [ HTMLAttr.Custom ("d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z") ]
                  [ ] ] ] ]


  let clickable_item_style = 
    "px-2 py-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700"

  let entry_desktop label onClick =
    div [ Class clickable_item_style
          OnClick (fun e -> e.stopPropagation() ; onClick() ) ]
      [ label |> ofString ]    
 
  let submenu_desktop label content =
    button [ Class (sprintf "reveal-menu-content %s text-blue-600 focus:outline-none" clickable_item_style) ]
      [ label |> ofString
        div [ Class "menu-content"]
          content ]

  let navbar_desktop dispatch =
    div [ Class "w-4/5 xl:w-2/3 flex items-center justify-between" ]
      [ vddd_logo dispatch
        links entry_desktop submenu_desktop dispatch ]       


  let render (model:Model) dispatch =
    div [ Class "navbar" ]
      [ div [ Class "lg:hidden" ]
          [ navbar_mobile dispatch
            mobile_links model dispatch ]

        div [Class "hidden lg:flex flex-row items-center justify-center"]
          [ navbar_desktop dispatch ] ]

  