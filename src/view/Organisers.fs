module App.Organisers

open Fable.Helpers.React
open Fable.Helpers.React.Props

type Profile = {
  Image : string
  Tagline : string
  Website : string
  Twitter : string
  Linkedin : string }

let organiser name profile =
  div [ Class "pt-4 m-4 bg-white card-hoverable flex flex-col items-stretch justify-between" ]
     [ div [ Class "flex flex-col items-center justify-start" ]
        [
         div [ Class "text-grey-darkest text-sm text-center" ]
          [ h3 [] [ str name ] ]

         div [ Class "text-grey-darker text-xs italic text-center" ]
          [ h4 [] [ str profile.Tagline ] ]
         
         div [ ]
          [ img [ Src profile.Image ] ]
        ]
              
       div [ Class "my-1 w-full flex items-center justify-around" ]
          [ a [ Class ""
                Href profile.Website
                Target "_blank"]
              [ img [ Class "rounded-full h-10 hover:shadow-md"
                      Src "./img/website.png" ] ]
            a [ Class "twitter-icon"
                Href ("https://twitter.com/" + profile.Twitter )
                Target "_blank"]
              [ img [ Class "rounded-full h-10 hover:shadow-md"
                      Src "./img/twitter.png" ] ]
            a [ Class "twitter-icon"
                Href ("https://www.linkedin.com/in/"+ profile.Linkedin + "/")
                Target "_blank"]
              [ img [ Class "rounded-full h-10 hover:shadow-md"
                      Src "./img/linkedin.png" ] ]
          ]
      ]


let organisers model dispatch =
  div [ Class "content"; Id "organisers" ]
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
                    Tagline = "Sociotechnical stoic"
                    Website = "https://baasie.com"
                    Twitter = "kenny_baas"
                    Linkedin = "kenny-baas"
                  }
              ]   
          ]
    ]
