'use client'

import {
  BankIcon,
  GithubLogoIcon,
  XLogoIcon,
  InstagramLogoIcon,
  EnvelopeIcon,
  GraduationCapIcon,
  CoffeeIcon,
  ButterflyIcon,
  PillIcon,
  WechatLogoIcon,
  DiscordLogoIcon,
  LinkedinLogoIcon,
  NoteIcon,
  ReadCvLogoIcon,
} from '@phosphor-icons/react'

export function CustomIcon({ name, size = 20 }: { name: string; size?: number }) {
  switch (name) {
    case 'bank':
      return <BankIcon size={size} weight="duotone" />;
    case 'github':
      return <GithubLogoIcon size={size} weight="duotone" />;
    case 'x':
      return <XLogoIcon size={size} weight="duotone" />;
    case 'instagram':
      return <InstagramLogoIcon size={size} weight="duotone" />;
    case "bsky":
      return <ButterflyIcon size={size} weight="duotone" />
    case 'email':
      return <EnvelopeIcon size={size} weight="duotone" />;
    case "college":
      return <GraduationCapIcon size={size} weight="duotone" />;
    case "coffee":
      return <CoffeeIcon size={size} weight="duotone" />;
    case "pill":
      return <PillIcon size={size} weight="duotone" />;
    case "wechat":
      return <WechatLogoIcon size={size} weight="duotone" />;
    case "discord":
      return <DiscordLogoIcon size={size} weight="duotone" />;
    case "linkedin":
      return <LinkedinLogoIcon size={size} weight="duotone" />;
    case "note":
      return <NoteIcon size={size} weight="duotone" />;
    case "readcv":
      return <ReadCvLogoIcon size={size} weight="duotone" />;
    default:
      return null
  }
}