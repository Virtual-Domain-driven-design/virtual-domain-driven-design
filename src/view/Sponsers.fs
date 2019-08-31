module App.Sponsors

open Fable.Helpers.React
open Fable.Helpers.React.Props

type Profile = {
  Image : string
  Website : string }

let sponsor name profile =
  div [ Class "pt-4 m-4 bg-white card-hoverable flex flex-col items-stretch justify-between" ]
     [ div [ Class "flex flex-col items-center justify-start" ]
        [
         
         div [ ]
          [ a [ Class ""
                Href profile.Website
                Target "_blank"]
              [ img [ 
                      Src profile.Image ] ]
        ]
       ]
      ]

let sponsors model dispatch =
  div [ Class "content"; Id "sponsors" ]
    [ div [ Class "mt-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
          [ h2 []
              [ str "Sponsors" ]
            div [ Class "flex flex-col md:flex-row justify-between items-center" ]
              [
                sponsor "Ubiquitous AS"
                  {
                    Image = "./img/Ubiquitous.png" 
                    Website = "https://www.ubiquitous.no/"
                  }
              ]   
          ]
    ]
