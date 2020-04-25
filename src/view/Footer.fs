namespace VDDD

module Footer =

  open Fable.React
  open Fable.React.Props
  open Routing


  let render model dispatch =
    div [ Class "footer bg-gray-200" ]
      [ div [ ] [ str "Copyright © Virtual Domain-Driven Design"]
        
        div [ ] [ str "Developed by Kenny Baas-Schwegler & Marco Heimeshoff "]
        
        a [ Class "link p-2"
            Href (link_to Code_of_conduct) ]
          [ str "Code of Conduct" ] ]  
