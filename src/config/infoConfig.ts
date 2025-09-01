export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Patrick Zhiji Yu'
export const headline = 'Software engineer, Full-Stack web developer'
export const introduction = 'I’m Patrick, a software engineer based in Sydney. I like coding, and building interesting things'
export const email = 'yuzhiji1991@gmail.com'
export const githubUsername = 'PatrickYuzhiji'

// about page
export const aboutMeHeadline = "I'm Patrick Zhiji Yu, a software engineer based in Sydney."
export const aboutParagraphs = [
  "I just finished my master's degree in Computer Science at the University of Wollongong.",
  "I keep building side projects in my spare time.",
  "Sometimes I like to cook, sometimes I like to travel, but always I like to take a walk in nature."
]


// blog
// export const blogHeadLine = "What I've thinking about."
// export const blogIntro = "I've written something about AI, programming and life."

// about page
export const EducationHeadLine = "Education"
export const EducationIntro = "I just finished my master's degree in Computer Science at the University of Wollongong."
export const CareerHeadLine = "Work"
export const CareerIntro = "I work as a software engineer"

// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/PatrickYuzhiji',
    external: true
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/patrick-zhiji-yu',
    external: true
  },
  {
    name: 'Note',
    icon: 'note',
    href: 'https://www.xiaohongshu.com/user/profile/61f7ec2f000000001000a996?xsec_token=YBEl5fnzRON6Gi7Rzr9VFW1eo-12F8ylD1Nl9FwTwqP4A=&xsec_source=app_share&xhsshare=WeixinSession&appuid=61f7ec2f000000001000a996&apptime=1756536680&share_id=07e108186982406a95250dafc9af8694&wechatWid=5e3d3ea0d8d45a53ac50cc7b03ac2a06&wechatOrigin=menu',
    external: true
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];



