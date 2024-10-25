import { BlockStack, Box, Button, ButtonGroup, Text } from '@shopify/polaris'
import React from 'react'

function PlanHeader({planMonthOrYearChoose,handlePlanMonthOrYearChoose}) {
  return (
    <Box paddingBlock={'400'}>
        <BlockStack gap={'300'}>
            <Text as='h2' variant='headingXl' tone='success'>Choose a Multivariants app plan suits your business.</Text>
            <Text as='p' variant='bodyLg' tone='subdued'>You can change/upgrade/downgrade MultiVariants app plan at anytime.</Text>
            <Text as='p' variant='headingLg' tone='caution'>You have 5 of the 5 days FREE trial period, you will not be charged during your FREE trial period</Text>
        </BlockStack>

        <Box paddingBlockStart={'500'}>
            <ButtonGroup variant='segmented' fullWidth>
                <Button
                size='large'
                pressed={planMonthOrYearChoose === 'monthly'}
                onClick={()=>handlePlanMonthOrYearChoose('monthly')}
                >Monthly Plan</Button>
                <Button
                pressed={planMonthOrYearChoose === 'yearly'}
                onClick={()=>{handlePlanMonthOrYearChoose('yearly')}}
                size='large'
                >Annual Plan (Get 20% discount)</Button>
            </ButtonGroup>
        </Box>
    </Box>
  )
}

export default PlanHeader