module App.Types


type Content =
  | Landingpage
  | Code_of_conduct


type Model = {
  menu_open: bool
  menu_transparent: bool
  view: Content
}


type Msg = 
  | Toggle_menu
  | Show of Content
  | ScrollTo of string
  | OnLogError of exn
  | Scrollposition of float
  | Clicked_Anywhere
