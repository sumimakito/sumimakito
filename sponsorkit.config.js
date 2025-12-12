import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'sumimakito',
  },
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: 'Backers',
      preset: tierPresets.xs,
    },
    {
      title: 'Coffee Friends',
      monthlyDollars: 5,
      preset: tierPresets.small,
    },
    {
      title: 'Expediters',
      monthlyDollars: 15,
      preset: tierPresets.base,
    },
    {
      title: 'Insiders',
      monthlyDollars: 25,
      preset: tierPresets.medium,
    },
    {
      title: 'Project Partners',
      monthlyDollars: 75,
      preset: tierPresets.large,
    },
    {
      title: 'Trusted Partners',
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ],
})
