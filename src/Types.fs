namespace VDDD


type Page =
  | Landingpage of string
  | Sessions
  | Code_of_conduct
  | Books
  | Videos
  | Communities
  | Podcasts
  | DDDDD


type Link = {
  url: string
  label: string
}


type Level = Introductory | Intermediate | Advanced | Expert


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


type Book = {
  title: string
  author: string
  img: string
  tags: string list
}


type Video = {
  title: string
  source: string
  url: string
  level: Level 
  tags: string list
}


type Community = {
  name: string
  country: string
  city: string option
  url: string
  img: string
}


type Model = {
  menu_open: bool
  page: Page
  searchterm: string
  sessions: Session list
  books: Book list
  communities: Community list
  videos: Video list
}


type Msg = 
  | Toggle_menu
  | Page_changed of Page
  | OnLogError of exn
  | Clicked_Anywhere
  
