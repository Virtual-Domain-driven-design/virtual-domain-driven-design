module App.Types


type Content =
  | Landingpage
  | Code_of_conduct


type Model = {
  menu_open: bool
  view: Content
}


type Msg = 
  | Toggle_menu
  | Show of Content
  | ScrollTo of string
  | OnLogError of exn
  | Clicked_Anywhere
