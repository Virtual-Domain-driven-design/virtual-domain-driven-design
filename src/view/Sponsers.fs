namespace VDDD

module Sponsors =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props

  type Profile = {
    Image : string
    Website : string }

  let sponsor name profile =
    div [ Class "m-4 w-full sm:w-48 flex-shrink-0 bg-white floating-action-button flex flex-col items-center justify-center" ]
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
                  sponsor "KDDD Conf"
                    { Image = "./img/sponsors/KDDD-conf.png" 
                      Website = "https://www.kdddconf.com/"
                    }
                  sponsor "DDD Europe"
                    { Image = "./img/sponsors/DDDEU20 Icon.jpg" 
                      Website = "https://dddeurope.com/"
                    }
                  sponsor "Explore DDD"
                    { Image = "./img/sponsors/EDDD_Logo.png" 
                      Website = "https://exploreddd.com/"
                    }
                ]   
            ]
      ]
