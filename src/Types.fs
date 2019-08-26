module App.Types


type Page =
  | Landingpage
  | Code_of_conduct
  | Books
  | Podcasts

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
  podcast: string option
  description: string
  links: Link list
}

type Session =
  | Past_session of Sessiondetails
  | Upcoming_session of Sessiondetails

type BookInfo = {
  title: string
  author: string
  img: string
  tags: string list
}

type Books =
  | Book of BookInfo

type Model = {
  menu_open: bool
  page: Page
  sessions: Session list
  books: Books list
}

type Msg = 
  | Toggle_menu
  | GoTo of Page
  | ScrollTo of string
  | OnLogError of exn
  | Clicked_Anywhere
  
