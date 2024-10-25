import { BlockStack, Box, Button, Divider, InlineStack, Text } from '@shopify/polaris'

import React from 'react'

function Standardplan() {
    return (
        <Box>
            <Box background='bg-fill-tertiary' paddingBlock={'500'} borderStartEndRadius='200' borderStartStartRadius='200'>
                <InlineStack align='center' gap={'300'} direction={'column'} blockAlign='center'>
                    <Text as='h2' variant='heading2xl' tone='success'>Standard</Text>
                    <Text as='p' variant='headingLg'>$9.99</Text>
                    <Button tone='success' size='large' variant='secondary' fullWidth={false}>Downgrade</Button>
                </InlineStack>
            </Box>
            <Divider />

            <Box paddingBlockStart={'300'} background='bg-fill-active' paddingInline={'200'}>
                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>All starter features</Text>
                        <Text as='p' variant='bodyLg'>All features from the starter plan</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Show total order price</Text>
                        <Text as='p' variant='bodyLg'>Display the total price for all selected variants and quantities before adding to the cart.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>

                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Apply to specific or group of products (Multiple rule sets)</Text>
                        <Text as='p' variant='bodyLg'>This will allow creating multiple rules for a single and different type of product group including individual display settings.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Variants option display list/select</Text>
                        <Text as='p' variant='bodyLg'>Can customize which options will show as a list or select (drop-down)</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Custom Out of Stock badge</Text>
                        <Text as='p' variant='bodyLg'>Upload custom badge for out of stock items.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>

                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Predefined themes</Text>
                        <Text as='p' variant='bodyLg'>Select a predefined theme for an individual rule set to show different theme for a single/group of products.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Variants grid/matrix view</Text>
                        <Text as='p' variant='bodyLg'>Show variant combinations in a grid/tabular layout</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>



                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Sticky action buttons</Text>
                        <Text as='p' variant='bodyLg'>Show add to cart and other action buttons as sticky bars</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Global cart restrictions</Text>
                        <Text as='p' variant='bodyLg'>Restrict orders combination of multiple products in the cart. Min/Max order value, items, and quantity.</Text>

                    </BlockStack>



                </Box>






            </Box>

            <Box background='bg-fill-tertiary' paddingBlock={'500'} borderEndEndRadius='200' borderEndStartRadius='200'>
                <InlineStack align='center' blockAlign='center'> <Button tone='success' size='large' variant='secondary' fullWidth={false}>Downgrade</Button></InlineStack>
            </Box>
        </Box>
    )
}

export default Standardplan