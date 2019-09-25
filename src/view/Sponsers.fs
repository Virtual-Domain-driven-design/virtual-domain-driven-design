namespace VDDD

module Sponsors =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props

  type Profile = {
    Image : string
    Website : string }

  let sponsor name profile =
    div [ Class "m-4 bg-white card-hoverable flex flex-col items-stretch justify-between" ]
      [ a [ Class ""
            Href profile.Website
            Target "_blank"]
          [ img [ Class "w-64"
                  Src profile.Image ] ]
       ]
       
  let render model dispatch =
    div [ Class "content"; Id "sponsors" ]
      [ div [ Class "mt-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
            [ h2 []
                [ str "Sponsors" ]
              div [ Class "flex flex-col md:flex-row justify-around items-center" ]
                [ sponsor "Heimeshoff IT"
                    { Image = "./img/sponsors/heimeshoffit.png" 
                      Website = "https://www.heimeshoff.de/"
                    }
                  sponsor "Ubiquitous AS"
                    { Image = "./img/sponsors/Ubiquitous.png" 
                      Website = "https://www.ubiquitous.no/"
                    }
                  sponsor "Xebia"
                    { Image = "./img/sponsors/xebia.png" 
                      Website = "https://www.xebia.com/"
                    }
                ]   
            ]
      ]
