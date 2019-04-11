module App.Types
open System


type Content =
  | Landingpage
  | Code_of_conduct

type Link = {
  url: string
  label: string
}

type Sessiondetails = {
  title: string
  date: DateTime
  img: string option
  description: string
  link: Link option
}

type Session =
  | Past_session of Sessiondetails
  | Upcoming_session of Sessiondetails

type Model = {
  menu_open: bool
  view: Content
  sessions: Session list
}


type Msg = 
  | Toggle_menu
  | Show of Content
  | ScrollTo of string
  | OnLogError of exn
  | Clicked_Anywhere
