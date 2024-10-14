import { Banner, BlockStack, Box, Card, Link, Text } from '@shopify/polaris'
import React, { useState } from 'react'




function Announcement() {

  const [showAnnounceMent, getShowAnnounceMent] = useState(true);

  const handleSHowHideBanner = () => {
    getShowAnnounceMent(false);
    console.log(showAnnounceMent)
  }

  return (
    showAnnounceMent &&
    <BlockStack inlineAlign='center'>
      <Box minWidth='600px' paddingBlockEnd={'1000'} paddingInline={'100'}>
        <Banner onDismiss={handleSHowHideBanner}
          
          tone="info"
          hideIcon="true"
        >
          <Text as='p' alignment='center' variant='headingMd'>
            You haven’t activate MultiVariants in your store yet!
          </Text>
        </Banner>
      </Box>
    </BlockStack>


  )
}

export default Announcement