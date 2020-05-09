namespace VDDD.DDDDD


type Sessiontype = 
    | RecordedTalk
    | LiveTalk
    | Panel
    | HandsOn


type Link = {
  url: string
  label: string
}


type Session = {
  sessiontype: Sessiontype
  host: string
  speakerimg: string
  title: string
  description: string
  links: Link list
}
