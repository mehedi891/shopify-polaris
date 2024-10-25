import React from 'react'
import { BlockStack, Box, Button, Divider, InlineStack, Text } from '@shopify/polaris'


function Professionalplan() {
    return (
        <Box>

            <Box background='bg-fill-tertiary' paddingBlock={'500'} borderStartEndRadius='200' borderStartStartRadius='200'>
                <InlineStack align='center' gap={'300'} direction={'column'} blockAlign='center'>
                    <Text as='h2' variant='heading2xl' tone='critical'>Profesional</Text>
                    <Text as='p' variant='headingLg'>$19.99</Text>
                    <Button tone='success' size='large' variant='secondary' fullWidth={false} pressed={true}>Current</Button>
                </InlineStack>
            </Box>
            <Divider />

            <Box paddingBlockStart={'300'} background='bg-fill-active' paddingInline={'200'}>
                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>All starter features</Text>
                        <Text as='p' variant='bodyLg'>All features from the Standard plan</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Custom text for variants</Text>
                        <Text as='p' variant='bodyLg'>This way customers can add custom texts / comments for each variant</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>

                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Direct to checkout button</Text>
                        <Text as='p' variant='bodyLg'>TAfter selecting all variants and quantity, customers can directly go to the checkout and purchase.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Variants bundle quantity</Text>
                        <Text as='p' variant='bodyLg'>You can sell variants in bundle quantities and customers can select the quantity from a drop-down list that you have added.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Variants option display list/select/swatch</Text>
                        <Text as='p' variant='bodyLg'>Can customize which options will show as a list, select (dropdown), or swatch.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>

                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Customize theme</Text>
                        <Text as='p' variant='bodyLg'>Customize themes with all elements and custom CSS</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Min/Max quantity of variant/total</Text>
                        <Text as='p' variant='bodyLg'>Set minimum quantity for product variants or combinations of variants.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>



                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>SMin/Max number of variants</Text>
                        <Text as='p' variant='bodyLg'>Set minimum/maximum number of product variants</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Min/Max value for variants/total</Text>
                        <Text as='p' variant='bodyLg'>Set minimum/maximum order value of product/variants</Text>

                    </BlockStack>



                </Box>






            </Box>

            <Box background='bg-fill-tertiary' paddingBlock={'500'} borderEndEndRadius='200' borderEndStartRadius='200'>
                <InlineStack align='center' blockAlign='center'> <Button tone='success' size='large' variant='secondary' fullWidth={false} pressed={true}>Current</Button></InlineStack>
            </Box>

        </Box>
    )
}

export default Professionalplan