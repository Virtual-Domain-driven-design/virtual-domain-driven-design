namespace VDDD

module Organisers =

  open Fable.React
  open Fable.React.Props

  type Profile = {
    Image : string
    Tagline : string
    Website : string
    Twitter : string
    Linkedin : string }

  let organiser name profile =
    div [ Class "bg-white py-4 m-4 rounded-lg shadow-md flex flex-col items-stretch justify-between" ]
       [ div [ Class "flex flex-col items-center justify-start" ]
          [
           div [ Class "text-gray-800 text-sm text-center" ]
            [ h3 [] [ str name ] ]

           div [ Class "text-gray-700 text-xs italic text-center" ]
            [ h4 [] [ str profile.Tagline ] ]
           
           div [ ]
            [ img [ Src profile.Image ] ]
          ]
                
         div [ Class "my-1 w-full flex items-center justify-around" ]
            [ a [ Class "floating-action-button rounded-full"
                  Href profile.Website
                  Target "_blank"]
                [ img [ Class "h-10"
                        Src "./img/website.png" ] ]
              a [ Class "twitter-icon floating-action-button rounded-full"
                  Href ("https://twitter.com/" + profile.Twitter )
                  Target "_blank"]
                [ img [ Class "h-10"
                        Src "./img/twitter.png" ] ]
              a [ Class "twitter-icon floating-action-button rounded-full"
                  Href ("https://www.linkedin.com/in/"+ profile.Linkedin + "/")
                  Target "_blank"]
                [ img [ Class "h-10"
                        Src "./img/linkedin.png" ] ]
            ]
        ]


  let render model dispatch =
    div [ Class "section bg-gray-200"; Id "organisers" ]
      [ div [ Class "mt-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
          [ h2 []
              [ str "Organisers" ]
            div [ Class "flex flex-col md:flex-row justify-between items-center" ]
              [
                organiser "Zsofia Herendi"
                  {
                    Image = "./img/zsofia.jpeg" 
                    Tagline = "Flow addict PM"
                    Website = "https://www.zherendi.com/"
                    Twitter = "ZHerendi"
                    Linkedin = "zsófia-herendi-2296b48"
                  }

                organiser "Marco Heimeshoff"
                  {
                    Image = "./img/MarcoHeimeshoff.jpg"
                    Tagline = "Business software artist"
                    Website = "https://www.heimeshoff.de/"
                    Twitter = "Heimeshoff"
                    Linkedin = "heimeshoff"
                  }
                   
                organiser "Kenny Baas-Schwegler"
                  {
                    Image = "./img/kenny.jpg"
                    Tagline = "Socio-technical stoic"
                    Website = "https://baasie.com"
                    Twitter = "kenny_baas"
                    Linkedin = "kenny-baas"
                  }
                   
                organiser "Maxime Sanglan-Charlier"
                  {
                    Image = "./img/photo_maxime_s.jpg"
                    Tagline = "Connecting people circa 97"
                    Website = "ncrafts.io "
                    Twitter = "__MaxS__"
                    Linkedin = "ncrafts"
                  }
              ]   
          ]
      ]
