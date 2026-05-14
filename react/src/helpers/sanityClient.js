import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'qbaoxtiu',
  dataset: 'production',
  apiVersion: '2026-05-14',
  useCdn: true,
  token: "sk0Tdchxp8D6KYPjdCbgMl4MxQENXVq5k3FVgakr2TGsEYotiGAnn14Bzwqxsx8rfTQ35a5B8VBB4VAkO8NnfrdDlkmFTgCT8Rpc2sg9nD9fhR4wHUfid5QB0yyiSv4BgyI06pxQJVxft4mdhuH8Nohntvlw2wvLLjeUTRmT8v4HOqccbLGp"
})

export default client