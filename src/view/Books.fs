namespace VDDD

module Books =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props
  open VDDD.Types
  
  let book dispatch (b:BookInfo) =
    div [ Class "bg-white w-64 card-hoverable shadow-md p-4 m-2" ]
          [
            
            
            img [ Src b.img ] 
            
            a [ Class "text-sm text-left font-bold"]
              [ str b.title ] ]

  let render model dispatch =
    div [ Class "content bg-grey-lighter" ; Id "books"]
         [ div [ Class "w-full flex flex-col items-center justify-start"]
              [ h2 [ Class "my-6 w-4/5 lg:w-2/3 xl:w-1/2" ]
                  [ str "Books"]
                div [ Class "w-11/12 md:w-5/6" ]
                  [ div [ Class "flex items-stretch justify-center flex-wrap" ]
                      (model.books
                      |> List.map (function Book b -> (book dispatch b)  ))
                      ]
                  ]
          ]