namespace VDDD

module Videos =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props
  open VDDD.Types
  open VDDD.Data.Common
  
  let tag t =
    div [ Class "flex-shrink-0 leading-none text-xs tracking-tighter bg-gray-200 text-gray-700 rounded-md p-1 m-1" ] 
      [ t |> ofString ]
  
  let tagline tags =
    div [ Class "px-1 w-full flex flex-row flex-wrap" ]
      ( tags
        |> Seq.map tag )

  let video (b:Video) =
    div [ Class "w-1/4 bg-white rounded-lg shadow-md p-2 m-1" ]
      [ div [ Class "font-bold" ]
          [ str b.title ]
        div [ Class "videoframe" ]
           [ iframe [ Class "videostream"
                      AllowFullScreen true
                      Src b.url
                      Scrolling "no"
                      FrameBorder 0 ]
               [ ] ]
        tag (level b.level)
        tagline b.tags
          ]

  let render model dispatch =
    div [ Class "content bg-gray-200" ; Id "videos"]
          [ div [ Class "w-full flex flex-col items-center justify-start"]
              [ h2 [ Class "my-6 w-4/5 lg:w-2/3 xl:w-1/2" ]
                  [ str "Videos"]
                div [ Class "w-11/12 md:w-5/6" ]
                  [ div [ Class "flex items-stretch justify-center flex-wrap" ]
                      ( model.videos
                        |> List.filter (fun b -> (model.searchterm.Length = 0) || (b.tags |> List.contains model.searchterm))
                        |> List.map video )
                  ]
              ]
          ]