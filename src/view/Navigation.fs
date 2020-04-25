namespace VDDD

module Navigation =

  open Fable.React
  open Fable.React.Props
  open Routing

  let vddd_logo dispatch = 
    a [ Class "p-4 cursor-pointer flex-shrink-0 flex items-center justify-center rounded-lg hover:bg-gray-400"  
        Href (link_to (Landingpage "top")) ]
      [ img [ Class "object-contain mr-2 h-8"
              Src "./img/vddd_logo_tp.png" ] ]  

  let links render_entry render_submenu dispatch =
    div [ Class "flex flex-col lg:flex-row items-start lg:items-stretch justify-end" ]
      [ render_entry "Sessions" Sessions
        render_entry "Sponsors" (Landingpage "sponsors")
        render_entry "Conference" DDDDD
        render_submenu "Resources"
          [ render_entry "Books" Books
            a [ Class "p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center "
                Href "https://dddheuristics.com"
                Target "_blank"]
              [ str "DDD Heuristics" ]
            render_entry "Podcasts" Podcasts ]
        render_submenu "Social" 
          [ a [ Class "p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center"
                Href "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/"
                Target "_blank"]
              [ img [ Class "ml-2 h-6"
                      Src "./img/meetup.svg" ] ]
            a [ Class "p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center "
                Href "https://j.mp/ddd-es-cqrs"
                Target "_blank"]
              [ img [ Class "mr-2 h-6"
                      Src "./img/slack_icon.png" ] 
                div [ Class "pt-1"] ["Slack " |> ofString ]
              ]
            a [ Class "p-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700 flex items-center justify-start lg:justify-center "
                Href "https://twitter.com/VirtualDDD"
                Target "_blank"]
              [ img [ Class "mr-2 h-6"
                      Src "./img/twitter.png" ] 
                div [ Class "pt-1"] ["Twitter " |> ofString ]
              ]                           
             ] ]


  let entry_mobile label page =
    a [ Class "w-full p-4 text-lg leading-tight cursor-pointer flex-shrink-0 hover:bg-gray-400 hover:text-blue-700"
        Href (link_to page) ]
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
      [ a [ Class "p-4 font-bold text-lg cursor-pointer flex-shrink-0 flex items-center justify-center rounded-lg hover:bg-gray-400 hover:text-blue-700"
            Href (link_to (Landingpage "top"))]
            [ img [ Class "object-contain mr-2 h-8"
                    Src "./img/vddd_logo_tp.png" ] ]
        button [ Class "flex-shrink-0 flex items-center m-4 px-3 py-2 border rounded border-white hover:text-blue-400 hover:border-blue-400"
                 OnClick (fun e -> e.stopPropagation() ; Toggle_menu |> dispatch ) ]
          [ svg [ Class "fill-current h-3 w-3" ; HTMLAttr.Custom ("viewBox", "0 0 20 20") ; HTMLAttr.Custom ("xmlns", "http://www.w3.org/2000/svg") ]
              [ path [ HTMLAttr.Custom ("d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z") ]
                  [ ] ] ] ]


  let clickable_item_style = 
    "px-2 py-4 text-lg leading-tight cursor-pointer flex-shrink-0 rounded-lg hover:bg-gray-400 hover:text-blue-700"


  let entry_desktop label page =
    a [ Class clickable_item_style
        Href (link_to page) ]
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

  