namespace VDDD

module About =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props


  let render model dispatch =
    div [ Class "content" ; Id "about"]
      [ div [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2 flex flex-col md:flex-row items-start justify-between" ]
          [ div [ Class "md:w-1/2 text-justify" ]
              [ h2 [ ]
                  [ str "About"]
                p [ Class "italic" ]
                  [ str "If you don't live near an active Domain Driven Design meetup, or just want to get more in-depth knowledge of DDD, please join this vast growing community! Anyone is invited here." ]
                p [ Class "pt-4" ]
                  [ str "Inspired by the virtualjug community, we strive to create a community of like-minded people eager to dive more into Domain Driven Design. We are going to organise panel discussions, community talks and more. So feel free to join us!" ] ]
            div [ Class "m-4 md:w-1/3" ]
              [ img [ Src "./img/ddd-book.jpg" ] ]
           ]
      ]