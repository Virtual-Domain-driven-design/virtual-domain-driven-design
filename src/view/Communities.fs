namespace VDDD

module Communities =

  open Fable.React
  open Fable.React.Props
  
    type Conference = {
    Image : string
    Location: string
    Date: string
    Website : string }
  
    let conference name (c:Conference) =
      a [ Href c.Website
          Target "_blank"
          Class "group floating-action-button bg-white w-full sm:w-64 rounded-lg shadow-md m-2 flex flex-col items-center justify-start" ]
        [ div [ Class "flex flex-col items-center justify-start" ]
            [
              div [ Class "m-2 font-semibold text-gray-800 text-sm text-center" ]
                [ str name ]
              div [ Class "text-gray-800 text-sm text-center" ]
                [ str c.Date ]  
              img [ Class "my-2 w-64 h-32 object-contain"
                    Src c.Image ] 
            ]
        ]
  
  let community (c:Community) =
    a [ Href c.url
        Target "_blank"
        Class "group floating-action-button bg-white w-full sm:w-48 rounded-lg shadow-md m-2 flex flex-col items-center justify-start" ]
      [ div [ Class "flex flex-col items-center justify-start" ]
          [
            div [ Class "m-2 h-8 font-semibold text-gray-800 text-sm text-center" ]
              [ str c.name ]
            img [ Class "my-2 w-64 object-contain"
                  Src c.img ] 
          ]
        div [ Class "text-gray-700 text-xs italic text-center" ]
          [ 
            str c.country 
            ( match c.city with
              | Some place -> str (", " + place)
              | None -> str "" )
          ] 
      ]
  
  let render model dispatch =
    div [ Class "content bg-gray-200" ; Id "communities"]
      [ div [ Class "w-full flex flex-col items-center justify-start" ]
            [ h2 [ Class "my-6 w-4/5 lg:w-2/3 xl:w-1/2" ]
                [ str "Conferences"]
              div [ Class "md:w-5/6" ]
                [div [ Class "flex justify-center flex-wrap" ]
                  [ conference "Domain-Driven Design Europe"
                      { Image = "https://res.cloudinary.com/value-object/image/upload/v1579547590/Logos/DDDEU20_black_high_res.jpg"
                        Location = "Amsterdam, Netherlands"
                        Date = "February"
                        Website = "https://dddeurope.com/"
                      }
                    conference "Explore DDD"
                      { Image = "./img/sponsors/EDDD_Logo.png"
                        Location = "Keystone, Colorado, USA"
                        Date = "September 14-18"
                        Website = "https://exploreddd.com/"
                      }
                    conference "KanDDDinsky"
                      { Image = "/img/sponsors/KDDD-conf.png"
                        Location = "Berlin, Germany"
                        Date = "29-30 October"
                        Website = "https://kandddinsky.de/"
                      }
                    conference "DDD China"
                      { Image = "https://avatars0.githubusercontent.com/u/32388073?s=200&v=4"
                        Location = "Beijing, China"
                        Date = "November"
                        Website = "http://ddd-china.com/"
                      }
                  ]
                ]
            ]
        
        
        div [ Class "w-full flex flex-col items-center justify-start" ]
          [ h2 [ Class "mt-6 w-4/5 lg:w-2/3 xl:w-1/2" ]
              [ str "Communities"]
              
            h3 [ Class "my-2 w-full text-center flex flex-col items-center justify-center" ]
              [ str "Check out the communities near you."
                div [ ] [ str "Are missing your own community? "] 
                     
                a [ Href "https://github.com/Baasie/virtual-domain-driven-design" 
                    Target "_blank" ]
                  [ str "Send us a pull request!" ]
              ]
            div [ Class "w-16/12 md:w-5/6" ]
                [ div [ Class "flex justify-center flex-wrap" ]
                    ( model.communities
                      |> List.map community )
                ]
            ]
      ]