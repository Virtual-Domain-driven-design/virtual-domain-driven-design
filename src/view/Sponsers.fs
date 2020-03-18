namespace VDDD

module Sponsors =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props

  type Profile = {
    Image : string
    Website : string }

  let sponsor name profile =
    a [ Href profile.Website
        Target "_blank"
        Class "group floating-action-button bg-white w-full sm:w-48 rounded-lg shadow-md m-2 flex flex-col items-center justify-start" ]
      [ div [ Class "flex flex-col items-center justify-start" ]
          [ div [ Class "m-2 h-8 font-semibold text-gray-800 text-sm text-center" ]
              [ str name ]
            img [ Class "my-2 w-64 h-32 object-contain"
                  Src profile.Image ]
           ]
        ]
       
  let render model dispatch =
    div [ Class "content"; Id "sponsors" ]
      [ div [ Class "mt-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
            [ h2 []
                [ str "Sponsors" ]
              div [ Class "w-full flex-wrap flex flex-col sm:flex-row justify-center items-stretch" ]
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
                  sponsor "KanDDDinsky"
                    { Image = "./img/sponsors/KDDD-conf.png" 
                      Website = "https://kandddinsky.de/"
                    }
                  sponsor "DDD Europe"
                    { Image = "./img/sponsors/DDDEU20 Icon.jpg"
                      Website = "https://dddeurope.com/"
                    }
                  sponsor "Explore DDD"
                    { Image = "./img/sponsors/EDDD_Logo.png" 
                      Website = "https://exploreddd.com/"
                    }
                  sponsor "nCrafts"
                    { Image = "./img/sponsors/logo_newcrafts_noir.png" 
                      Website = "https://ncrafts.io/"
                    }
                  sponsor "Sessionize"
                    { Image = "./img/sponsors/sessionize.png" 
                      Website = "https://sessionize.com/"
                    }
                ]   
            ]
      ]
