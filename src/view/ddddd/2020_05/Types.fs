namespace VDDD.DDDDD


type Sessiontype = 
    | RecordedTalk
    | LiveTalk
    | Panel
    | HandsOn
    | LiveCoding


type Link = {
  url: string
  label: string
}


type Session = {
  sessiontype: Sessiontype
  time: string
  host: string
  speakerimg: string
  title: string
  description: string
  links: Link list
}
