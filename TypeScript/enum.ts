//* Init Enum

enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGARAM = 'INSTAGRAM',
}

const social = SocialMedia.INSTAGARAM
console.log(social)
