module App.Types


type Page =
  | Landingpage
  | Code_of_conduct
  | Books

type Link = {
  url: string
  label: string
}

type Sessiondetails = {
  title: string
  date: string
  time: string
  img: string option
  video: string option
  embedded: string option
  description: string
  links: Link list
}

type Session =
  | Past_session of Sessiondetails
  | Upcoming_session of Sessiondetails

type Model = {
  menu_open: bool
  page: Page
  sessions: Session list
}


type Msg = 
  | Toggle_menu
  | GoTo of Page
  | ScrollTo of string
  | OnLogError of exn
  | Clicked_Anywhere