namespace VDDD

module Conferences =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props
  open VDDD.Types
  
    type Profile = {
    Image : string
    Location: string
    Date: string
    Website : string }
  
    let conference name profile =
        div [ Class "pt-4 m-4 bg-white card-hoverable flex flex-col items-stretch justify-between" ]
           [ div [ Class "flex flex-col items-center justify-start h-64" ]
              [
               div [ Class "text-gray-800 text-sm text-center" ]
                [ h3 [] [ str name ] ]
  
               div [ Class "text-gray-700 text-xs italic text-center" ]
                [ h4 [] [ str profile.Date ] ]
               
               div [ Class "text-gray-700 text-xs italic text-center" ]
                [ h4 [] [ str profile.Location ] ]
               
               a [ Class ""
                   Href profile.Website
                   Target "_blank"]
                [ img [ Class "w-64"
                        Src profile.Image ] ]
              ]
             ]
  
  
  let render model dispatch =
     div [ Class "content bg-gray-200" ; Id "books"]
        [ div [ Class "mt-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
            [ h2 [  ]
                [ str "Conferences"]
              div [ Class "flex flex-col md:flex-row justify-between items-center" ]
                [ conference "Domain-Driven Design Europe"
                    { Image = "./img/sponsors/DDDEU20 Icon.jpg"
                      Location = "Amsterdam, Netherlands"
                      Date = "February 3-7"
                      Website = "https://dddeurope.com/"
                    }
                  conference "Explore DDD"
                    { Image = "./img/sponsors/EDDD_Logo.png"
                      Location = "Keystone, Colorado, USA"
                      Date = "September 14-18"
                      Website = "https://exploreddd.com/"
                    }
                  conference "KDDD Conf"
                    { Image = "/img/sponsors/KDDD-conf.jpeg"
                      Location = "Berlin, Germany"
                      Date = "October"
                      Website = "https://kddconf.com/"
                    }
                ]
            ]
        ]